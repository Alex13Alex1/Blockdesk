import React from 'react';

/**
 * Interactive Infrastructure Diagram Component
 * Based on the official Blockdesk infographic design
 * Shows: Market Context → Solution → Strategic Partners
 * With Fiat Settlement Layer and Foundational Elements
 * 
 * BRANDING: Uses "Blockdesk" consistently throughout
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
          <linearGradient id="glow1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="glow2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="1" stopColor="#a78bfa" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="solutionGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#60a5fa" />
          </marker>
        </defs>

        {/* Background circuit lines - subtle tech aesthetic */}
        <g opacity="0.2">
          <line x1="0" y1="100" x2="1000" y2="100" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="0" y1="300" x2="1000" y2="300" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="0" y1="500" x2="1000" y2="500" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" />
        </g>

        {/* Title - BRANDING: Blockdesk */}
        <text 
          x="500" 
          y="40" 
          fontSize="22" 
          fill="#e0e7ff" 
          fontWeight="800" 
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Blockdesk - MiCA-Native OTC &amp; Settlement Platform for Europe
        </text>

        {/* Market Context - Left Panel */}
        <rect 
          x="20" 
          y="80" 
          width="200" 
          height="180" 
          rx="16" 
          fill="url(#glow1)" 
          stroke="#60a5fa" 
          strokeWidth="2.5" 
          opacity="0.85" 
          filter="url(#glow)"
          className="transition-all duration-300 hover:opacity-100"
        />
        <text x="40" y="115" fontSize="17" fill="#e0e7ff" fontWeight="700">Market Context</text>
        <text x="40" y="145" fontSize="14" fill="#cbd5e1">• MiCA Regulation</text>
        <text x="40" y="170" fontSize="14" fill="#cbd5e1">• Institutional Demand</text>
        <text x="40" y="195" fontSize="14" fill="#cbd5e1">• Shift Towards Compliance &amp; Settlement</text>

        {/* Arrow from Market Context to Solution */}
        <path 
          d="M220 170 L340 250" 
          stroke="#60a5fa" 
          strokeWidth="4" 
          fill="none" 
          filter="url(#glow)"
          markerEnd="url(#arrowhead)"
        />

        {/* Solution - Central Circle with 4 Quadrants */}
        <circle 
          cx="500" 
          cy="250" 
          r="130" 
          fill="url(#solutionGradient)" 
          stroke="#22c55e" 
          strokeWidth="3.5" 
          opacity="0.95" 
          filter="url(#glow)"
          className="transition-all duration-300 hover:opacity-100"
        />
        <text x="500" y="195" fontSize="19" fill="#e0e7ff" fontWeight="800" textAnchor="middle">Solution</text>
        
        {/* RFQ OTC Execution - Top Left Quadrant */}
        <g className="hover:opacity-100 opacity-95 transition-opacity">
          <rect x="410" y="180" width="90" height="65" rx="10" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2" />
          {/* Document with pen icon */}
          <rect x="430" y="190" width="22" height="28" rx="2" fill="#e0e7ff" opacity="0.9" />
          <line x1="435" y1="200" x2="448" y2="200" stroke="#1e40af" strokeWidth="1.5" />
          <line x1="435" y1="206" x2="448" y2="206" stroke="#1e40af" strokeWidth="1.5" />
          <line x1="435" y1="212" x2="445" y2="212" stroke="#1e40af" strokeWidth="1.5" />
          <circle cx="452" cy="200" r="3.5" fill="#f59e0b" />
          <text x="455" y="255" fontSize="12" fill="#e0e7ff" fontWeight="600" textAnchor="middle">RFQ OTC Execution</text>
        </g>

        {/* Crypto↔Fiat Settlement - Top Right Quadrant */}
        <g className="hover:opacity-100 opacity-95 transition-opacity">
          <rect x="500" y="180" width="90" height="65" rx="10" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2" />
          {/* Bitcoin and Euro exchange icon */}
          <circle cx="525" cy="200" r="11" fill="#f59e0b" />
          <text x="525" y="206" fontSize="11" fill="#1e40af" fontWeight="700" textAnchor="middle">₿</text>
          <text x="540" y="200" fontSize="16" fill="#e0e7ff">↔</text>
          <circle cx="555" cy="200" r="11" fill="#22c55e" />
          <text x="555" y="206" fontSize="11" fill="#ffffff" fontWeight="700" textAnchor="middle">€</text>
          <text x="545" y="255" fontSize="12" fill="#e0e7ff" fontWeight="600" textAnchor="middle">Crypto↔Fiat Settlement</text>
        </g>

        {/* Institutional Liquidity - Bottom Left Quadrant */}
        <g className="hover:opacity-100 opacity-95 transition-opacity">
          <rect x="410" y="255" width="90" height="65" rx="10" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2" />
          {/* Building/bank icon */}
          <rect x="430" y="265" width="32" height="28" rx="2" fill="#e0e7ff" opacity="0.9" />
          <rect x="435" y="270" width="6" height="6" fill="#1e40af" />
          <rect x="444" y="270" width="6" height="6" fill="#1e40af" />
          <rect x="453" y="270" width="6" height="6" fill="#1e40af" />
          <rect x="435" y="278" width="6" height="6" fill="#1e40af" />
          <rect x="444" y="278" width="6" height="6" fill="#1e40af" />
          <rect x="453" y="278" width="6" height="6" fill="#1e40af" />
          <polygon points="430,265 446,252 462,265" fill="#e0e7ff" opacity="0.9" />
          <text x="455" y="330" fontSize="12" fill="#e0e7ff" fontWeight="600" textAnchor="middle">Institutional Liquidity</text>
        </g>

        {/* Compliance & Reporting - Bottom Right Quadrant */}
        <g className="hover:opacity-100 opacity-95 transition-opacity">
          <rect x="500" y="255" width="90" height="65" rx="10" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2" />
          {/* Clipboard with checkmark icon */}
          <rect x="520" y="265" width="22" height="28" rx="2" fill="#e0e7ff" opacity="0.9" />
          <rect x="523" y="268" width="16" height="3.5" rx="1" fill="#1e40af" />
          <path d="M525 280 L530 285 L540 272" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="545" y="330" fontSize="12" fill="#e0e7ff" fontWeight="600" textAnchor="middle">Compliance &amp; Reporting</text>
        </g>

        {/* Arrow from Solution to Strategic Partners */}
        <path 
          d="M630 250 L780 170" 
          stroke="#60a5fa" 
          strokeWidth="4" 
          fill="none" 
          filter="url(#glow)"
          markerEnd="url(#arrowhead)"
        />

        {/* Strategic Partners - Right Panel */}
        <rect 
          x="780" 
          y="80" 
          width="200" 
          height="180" 
          rx="16" 
          fill="url(#glow1)" 
          stroke="#60a5fa" 
          strokeWidth="2.5" 
          opacity="0.85" 
          filter="url(#glow)"
          className="transition-all duration-300 hover:opacity-100"
        />
        <text x="800" y="115" fontSize="17" fill="#e0e7ff" fontWeight="700">Strategic Partners</text>
        
        {/* Banks icon */}
        <g>
          <rect x="805" y="130" width="22" height="16" rx="2" fill="#e0e7ff" opacity="0.9" />
          <rect x="808" y="133" width="5" height="4" fill="#1e40af" />
          <rect x="816" y="133" width="5" height="4" fill="#1e40af" />
          <rect x="824" y="133" width="5" height="4" fill="#1e40af" />
          <polygon points="805,130 815,124 825,130" fill="#e0e7ff" opacity="0.9" />
          <text x="835" y="142" fontSize="14" fill="#cbd5e1">Banks</text>
        </g>
        
        {/* PSP & Fintech icon (shopping cart) */}
        <g>
          <rect x="808" y="153" width="14" height="11" rx="1" fill="#e0e7ff" opacity="0.9" />
          <circle cx="813" cy="157" r="2.5" fill="#1e40af" />
          <circle cx="820" cy="157" r="2.5" fill="#1e40af" />
          <text x="835" y="162" fontSize="14" fill="#cbd5e1">PSP &amp; Fintech</text>
        </g>
        
        {/* Exchanges & Brokers icon (bar chart) */}
        <g>
          <rect x="808" y="173" width="3.5" height="9" fill="#e0e7ff" opacity="0.9" />
          <rect x="814" y="170" width="3.5" height="12" fill="#e0e7ff" opacity="0.9" />
          <rect x="820" y="175" width="3.5" height="7" fill="#e0e7ff" opacity="0.9" />
          <rect x="826" y="168" width="3.5" height="14" fill="#e0e7ff" opacity="0.9" />
          <text x="835" y="182" fontSize="14" fill="#cbd5e1">Exchanges &amp; Brokers</text>
        </g>

        {/* Fiat Settlement Layer - Middle Bottom Platform */}
        <rect 
          x="300" 
          y="380" 
          width="400" 
          height="110" 
          rx="22" 
          fill="#1e3a8a" 
          opacity="0.75" 
          stroke="#22c55e" 
          strokeWidth="3" 
          filter="url(#glow)"
          className="transition-all duration-300 hover:opacity-0.9"
        />
        <text x="500" y="420" fontSize="20" fill="#e0e7ff" fontWeight="800" textAnchor="middle">Fiat Settlement Layer</text>
        <text x="350" y="455" fontSize="14" fill="#cbd5e1">EMI Partnership</text>
        <text x="600" y="455" fontSize="14" fill="#cbd5e1">Internal Integration</text>

        {/* Foundational Elements - Bottom Hexagons */}
        
        {/* Architecture Defined (gears icon) */}
        <g className="hover:opacity-100 opacity-95 transition-opacity cursor-pointer">
          <polygon points="50,500 85,482 120,500 85,518" fill="#1e40af" opacity="0.65" stroke="#22c55e" strokeWidth="2.5" />
          <circle cx="85" cy="495" r="9" fill="#e0e7ff" opacity="0.9" />
          <circle cx="85" cy="495" r="6" fill="#1e40af" />
          <circle cx="78" cy="488" r="3.5" fill="#e0e7ff" opacity="0.9" />
          <circle cx="92" cy="488" r="3.5" fill="#e0e7ff" opacity="0.9" />
          <circle cx="78" cy="502" r="3.5" fill="#e0e7ff" opacity="0.9" />
          <circle cx="92" cy="502" r="3.5" fill="#e0e7ff" opacity="0.9" />
          <text x="85" y="535" fontSize="12" fill="#cbd5e1" textAnchor="middle">Architecture Defined</text>
        </g>

        {/* Regulatory Pathways (document with balance scale) */}
        <g className="hover:opacity-100 opacity-95 transition-opacity cursor-pointer">
          <polygon points="250,500 285,482 320,500 285,518" fill="#1e40af" opacity="0.65" stroke="#22c55e" strokeWidth="2.5" />
          <rect x="275" y="485" width="22" height="16" rx="1" fill="#e0e7ff" opacity="0.9" />
          <line x1="280" y1="490" x2="292" y2="490" stroke="#1e40af" strokeWidth="1.5" />
          <circle cx="280" cy="490" r="2.5" fill="#1e40af" />
          <circle cx="292" cy="490" r="2.5" fill="#1e40af" />
          <text x="285" y="535" fontSize="12" fill="#cbd5e1" textAnchor="middle">Regulatory Pathways</text>
        </g>

        {/* Partner Discussions (speech bubble) */}
        <g className="hover:opacity-100 opacity-95 transition-opacity cursor-pointer">
          <polygon points="450,500 485,482 520,500 485,518" fill="#1e40af" opacity="0.65" stroke="#22c55e" strokeWidth="2.5" />
          <ellipse cx="480" cy="490" rx="7" ry="6" fill="#e0e7ff" opacity="0.9" />
          <ellipse cx="492" cy="490" rx="7" ry="6" fill="#e0e7ff" opacity="0.9" />
          <path d="M480 495 Q485 500 492 495" stroke="#1e40af" strokeWidth="2" fill="none" />
          <text x="485" y="535" fontSize="12" fill="#cbd5e1" textAnchor="middle">Partner Discussions</text>
        </g>

        {/* Execution aligned with MiCA (intersecting arrows) */}
        <g className="hover:opacity-100 opacity-95 transition-opacity cursor-pointer">
          <polygon points="650,500 685,482 720,500 685,518" fill="#1e40af" opacity="0.65" stroke="#22c55e" strokeWidth="2.5" />
          <path d="M675 485 L680 492 L685 485" stroke="#e0e7ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M680 492 L680 500" stroke="#e0e7ff" strokeWidth="2.5" />
          <path d="M695 485 L690 492 L695 500" stroke="#e0e7ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M690 492 L685 492" stroke="#e0e7ff" strokeWidth="2.5" />
          <text x="685" y="535" fontSize="12" fill="#cbd5e1" textAnchor="middle">Execution aligned with MiCA</text>
        </g>
      </svg>
    </div>
  );
}
