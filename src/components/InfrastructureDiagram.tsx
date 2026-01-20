import React from 'react';

/**
 * Interactive Infrastructure Diagram Component
 * Based on the official Blockdesk infographic
 * Shows: Market Context → Solution → Strategic Partners
 * With Fiat Settlement Layer and Foundational Elements
 * 
 * BRANDING: Uses "Blockdesk" for consistency across all materials
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
            <stop offset="0" stopColor="#22c55e" stopOpacity="0.5" />
            <stop offset="1" stopColor="#10b981" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="circuitGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="1" stopColor="#a78bfa" stopOpacity="0.5" />
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

        {/* Background circuit pattern - subtle */}
        <g opacity="0.15">
          <path d="M0,100 Q250,50 500,100 T1000,100" stroke="url(#circuitGlow)" strokeWidth="1" fill="none" />
          <path d="M0,200 Q250,150 500,200 T1000,200" stroke="url(#circuitGlow)" strokeWidth="1" fill="none" />
          <path d="M0,300 Q250,250 500,300 T1000,300" stroke="url(#circuitGlow)" strokeWidth="1" fill="none" />
          <path d="M0,400 Q250,350 500,400 T1000,400" stroke="url(#circuitGlow)" strokeWidth="1" fill="none" />
        </g>

        {/* Title - BRANDING: Blockdesk */}
        <text 
          x="500" 
          y="35" 
          fontSize="22" 
          fill="#e0e7ff" 
          fontWeight="900" 
          textAnchor="middle"
          letterSpacing="0.5px"
        >
          Blockdesk - MiCA-Native OTC &amp; Settlement Platform for Europe
        </text>

        {/* Market Context - Left Panel */}
        <rect 
          x="20" 
          y="70" 
          width="200" 
          height="190" 
          rx="18" 
          fill="url(#glow1)" 
          stroke="#60a5fa" 
          strokeWidth="2.5" 
          opacity="0.85" 
          filter="url(#glow)"
          className="transition-all duration-300 hover:opacity-100"
        />
        <text x="40" y="105" fontSize="17" fill="#e0e7ff" fontWeight="800">Market Context</text>
        <g>
          <circle cx="40" cy="130" r="4" fill="#60a5fa" />
          <text x="55" y="135" fontSize="14" fill="#cbd5e1">MiCA Regulation</text>
        </g>
        <g>
          <circle cx="40" cy="155" r="4" fill="#60a5fa" />
          <text x="55" y="160" fontSize="14" fill="#cbd5e1">Institutional Demand</text>
        </g>
        <g>
          <circle cx="40" cy="180" r="4" fill="#60a5fa" />
          <text x="55" y="185" fontSize="14" fill="#cbd5e1">Shift Towards Compliance</text>
          <text x="55" y="200" fontSize="14" fill="#cbd5e1">&amp; Settlement</text>
        </g>

        {/* Arrow from Market Context to Solution */}
        <path 
          d="M220 165 L320 250" 
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
            r="130" 
            fill="none" 
            stroke="url(#circuitGlow)" 
            strokeWidth="3" 
            opacity="0.6"
            filter="url(#glow)"
          />
          {/* Inner circle background */}
          <circle 
            cx="500" 
            cy="250" 
            r="120" 
            fill="url(#glow2)" 
            stroke="#22c55e" 
            strokeWidth="3" 
            opacity="0.9" 
            filter="url(#glow)"
            className="transition-all duration-300 hover:opacity-100"
          />
          
          {/* Center label */}
          <text x="500" y="195" fontSize="19" fill="#e0e7ff" fontWeight="900" textAnchor="middle">Solution</text>
          
          {/* Dividing lines for quadrants */}
          <line x1="500" y1="130" x2="500" y2="370" stroke="#22c55e" strokeWidth="2" opacity="0.3" />
          <line x1="380" y1="250" x2="620" y2="250" stroke="#22c55e" strokeWidth="2" opacity="0.3" />
          
          {/* RFQ OTC Execution - Top Left Quadrant */}
          <g className="hover:opacity-100 opacity-90 transition-opacity">
            <rect x="390" y="140" width="100" height="100" rx="10" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2" />
            {/* Document with pen icon */}
            <rect x="410" y="155" width="25" height="30" rx="2" fill="#e0e7ff" opacity="0.9" />
            <line x1="415" y1="165" x2="428" y2="165" stroke="#1e40af" strokeWidth="2" />
            <line x1="415" y1="172" x2="428" y2="172" stroke="#1e40af" strokeWidth="2" />
            <line x1="415" y1="179" x2="425" y2="179" stroke="#1e40af" strokeWidth="2" />
            <circle cx="435" cy="165" r="4" fill="#f59e0b" />
            <line x1="435" y1="165" x2="440" y2="160" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <text x="440" y="255" fontSize="12" fill="#e0e7ff" fontWeight="700" textAnchor="middle">RFQ OTC</text>
            <text x="440" y="270" fontSize="12" fill="#e0e7ff" fontWeight="700" textAnchor="middle">Execution</text>
          </g>

          {/* Crypto↔Fiat Settlement - Top Right Quadrant */}
          <g className="hover:opacity-100 opacity-90 transition-opacity">
            <rect x="510" y="140" width="100" height="100" rx="10" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2" />
            {/* Bitcoin and Euro exchange */}
            <circle cx="530" cy="175" r="12" fill="#f59e0b" />
            <text x="530" y="181" fontSize="11" fill="#1e40af" fontWeight="800" textAnchor="middle">₿</text>
            <text x="550" y="175" fontSize="16" fill="#e0e7ff" fontWeight="700">↔</text>
            <circle cx="570" cy="175" r="12" fill="#22c55e" />
            <text x="570" y="181" fontSize="11" fill="#ffffff" fontWeight="800" textAnchor="middle">€</text>
            <text x="560" y="255" fontSize="12" fill="#e0e7ff" fontWeight="700" textAnchor="middle">Crypto↔Fiat</text>
            <text x="560" y="270" fontSize="12" fill="#e0e7ff" fontWeight="700" textAnchor="middle">Settlement</text>
          </g>

          {/* Institutional Liquidity - Bottom Left Quadrant */}
          <g className="hover:opacity-100 opacity-90 transition-opacity">
            <rect x="390" y="250" width="100" height="100" rx="10" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2" />
            {/* Bank building icon */}
            <rect x="410" y="270" width="35" height="30" rx="2" fill="#e0e7ff" opacity="0.9" />
            <rect x="415" y="275" width="7" height="7" fill="#1e40af" />
            <rect x="425" y="275" width="7" height="7" fill="#1e40af" />
            <rect x="435" y="275" width="7" height="7" fill="#1e40af" />
            <rect x="415" y="285" width="7" height="7" fill="#1e40af" />
            <rect x="425" y="285" width="7" height="7" fill="#1e40af" />
            <rect x="435" y="285" width="7" height="7" fill="#1e40af" />
            <polygon points="410,270 427.5,260 445,270" fill="#e0e7ff" opacity="0.9" />
            <text x="440" y="365" fontSize="12" fill="#e0e7ff" fontWeight="700" textAnchor="middle">Institutional</text>
            <text x="440" y="380" fontSize="12" fill="#e0e7ff" fontWeight="700" textAnchor="middle">Liquidity</text>
          </g>

          {/* Compliance & Reporting - Bottom Right Quadrant */}
          <g className="hover:opacity-100 opacity-90 transition-opacity">
            <rect x="510" y="250" width="100" height="100" rx="10" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2" />
            {/* Clipboard with checkmark */}
            <rect x="525" y="270" width="25" height="30" rx="2" fill="#e0e7ff" opacity="0.9" />
            <rect x="530" y="275" width="15" height="4" rx="1" fill="#1e40af" />
            <path d="M530 290 L537 297 L550 282" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="560" y="365" fontSize="12" fill="#e0e7ff" fontWeight="700" textAnchor="middle">Compliance</text>
            <text x="560" y="380" fontSize="12" fill="#e0e7ff" fontWeight="700" textAnchor="middle">&amp; Reporting</text>
          </g>
        </g>

        {/* Arrow from Solution to Strategic Partners */}
        <path 
          d="M630 250 L770 165" 
          stroke="#60a5fa" 
          strokeWidth="4" 
          fill="none" 
          filter="url(#glow)"
          markerEnd="url(#arrowhead)"
        />

        {/* Strategic Partners - Right Panel */}
        <rect 
          x="780" 
          y="70" 
          width="200" 
          height="190" 
          rx="18" 
          fill="url(#glow1)" 
          stroke="#60a5fa" 
          strokeWidth="2.5" 
          opacity="0.85" 
          filter="url(#glow)"
          className="transition-all duration-300 hover:opacity-100"
        />
        <text x="800" y="105" fontSize="17" fill="#e0e7ff" fontWeight="800">Strategic Partners</text>
        
        {/* Banks */}
        <g>
          <rect x="805" y="120" width="25" height="18" rx="2" fill="#e0e7ff" opacity="0.9" />
          <rect x="810" y="125" width="6" height="5" fill="#1e40af" />
          <rect x="818" y="125" width="6" height="5" fill="#1e40af" />
          <rect x="826" y="125" width="6" height="5" fill="#1e40af" />
          <polygon points="805,120 817.5,113 830,120" fill="#e0e7ff" opacity="0.9" />
          <text x="840" y="135" fontSize="14" fill="#cbd5e1">Banks</text>
        </g>
        
        {/* PSP & Fintech */}
        <g>
          <rect x="808" y="150" width="15" height="12" rx="1" fill="#e0e7ff" opacity="0.9" />
          <circle cx="813" cy="155" r="2.5" fill="#1e40af" />
          <circle cx="820" cy="155" r="2.5" fill="#1e40af" />
          <text x="840" y="160" fontSize="14" fill="#cbd5e1">PSP &amp; Fintech</text>
        </g>
        
        {/* Exchanges & Brokers */}
        <g>
          <rect x="808" y="175" width="4" height="10" fill="#e0e7ff" opacity="0.9" />
          <rect x="814" y="172" width="4" height="13" fill="#e0e7ff" opacity="0.9" />
          <rect x="820" y="178" width="4" height="7" fill="#e0e7ff" opacity="0.9" />
          <rect x="826" y="170" width="4" height="15" fill="#e0e7ff" opacity="0.9" />
          <text x="840" y="185" fontSize="14" fill="#cbd5e1">Exchanges &amp; Brokers</text>
        </g>

        {/* Fiat Settlement Layer - Platform Below Solution */}
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
          className="transition-all duration-300 hover:opacity-0.9"
        />
        <text x="500" y="415" fontSize="20" fill="#e0e7ff" fontWeight="900" textAnchor="middle">Fiat Settlement Layer</text>
        <text x="350" y="445" fontSize="14" fill="#cbd5e1" fontWeight="600">EMI Partnership</text>
        <text x="620" y="445" fontSize="14" fill="#cbd5e1" fontWeight="600">Internal Integration</text>

        {/* Foundational Elements - Bottom Hexagons */}
        
        {/* Architecture Defined - Gears/Nodes icon */}
        <g className="hover:opacity-100 opacity-90 transition-opacity cursor-pointer">
          <polygon points="50,520 85,500 120,520 85,540" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2.5" filter="url(#glow)" />
          {/* Interconnected nodes/gears */}
          <circle cx="70" cy="510" r="6" fill="#e0e7ff" opacity="0.9" />
          <circle cx="100" cy="510" r="6" fill="#e0e7ff" opacity="0.9" />
          <circle cx="85" cy="530" r="6" fill="#e0e7ff" opacity="0.9" />
          <line x1="70" y1="510" x2="85" y2="530" stroke="#e0e7ff" strokeWidth="1.5" opacity="0.8" />
          <line x1="100" y1="510" x2="85" y2="530" stroke="#e0e7ff" strokeWidth="1.5" opacity="0.8" />
          <line x1="70" y1="510" x2="100" y2="510" stroke="#e0e7ff" strokeWidth="1.5" opacity="0.8" />
          <text x="85" y="555" fontSize="12" fill="#cbd5e1" fontWeight="600" textAnchor="middle">Architecture Defined</text>
        </g>

        {/* Regulatory Pathways - Balance scale icon */}
        <g className="hover:opacity-100 opacity-90 transition-opacity cursor-pointer">
          <polygon points="250,520 285,500 320,520 285,540" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2.5" filter="url(#glow)" />
          {/* Balance scale */}
          <line x1="270" y1="505" x2="300" y2="505" stroke="#e0e7ff" strokeWidth="2" />
          <line x1="285" y1="505" x2="285" y2="515" stroke="#e0e7ff" strokeWidth="2" />
          <circle cx="270" cy="505" r="4" fill="#e0e7ff" opacity="0.9" />
          <circle cx="300" cy="505" r="4" fill="#e0e7ff" opacity="0.9" />
          <rect x="275" y="500" width="20" height="15" rx="1" fill="#e0e7ff" opacity="0.6" />
          <text x="285" y="555" fontSize="12" fill="#cbd5e1" fontWeight="600" textAnchor="middle">Regulatory Pathways</text>
        </g>

        {/* Partner Discussions - Speech bubbles icon */}
        <g className="hover:opacity-100 opacity-90 transition-opacity cursor-pointer">
          <polygon points="450,520 485,500 520,520 485,540" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2.5" filter="url(#glow)" />
          {/* Two speech bubbles */}
          <ellipse cx="470" cy="508" rx="8" ry="7" fill="#e0e7ff" opacity="0.9" />
          <ellipse cx="500" cy="508" rx="8" ry="7" fill="#e0e7ff" opacity="0.9" />
          <path d="M470 512 Q475 516 480 512" stroke="#1e40af" strokeWidth="2" fill="none" />
          <path d="M500 512 Q505 516 510 512" stroke="#1e40af" strokeWidth="2" fill="none" />
          <text x="485" y="555" fontSize="12" fill="#cbd5e1" fontWeight="600" textAnchor="middle">Partner Discussions</text>
        </g>

        {/* Execution aligned with MiCA - Intertwined arrows */}
        <g className="hover:opacity-100 opacity-90 transition-opacity cursor-pointer">
          <polygon points="650,520 685,500 720,520 685,540" fill="#1e40af" opacity="0.7" stroke="#22c55e" strokeWidth="2.5" filter="url(#glow)" />
          {/* Intertwined arrows forming X */}
          <path d="M670 500 L700 530" stroke="#e0e7ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M700 500 L670 530" stroke="#e0e7ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M670 500 L675 505 L680 500" stroke="#e0e7ff" strokeWidth="2" fill="none" />
          <path d="M700 500 L695 505 L690 500" stroke="#e0e7ff" strokeWidth="2" fill="none" />
          <path d="M700 530 L695 525 L690 530" stroke="#e0e7ff" strokeWidth="2" fill="none" />
          <path d="M670 530 L675 525 L680 530" stroke="#e0e7ff" strokeWidth="2" fill="none" />
          <text x="685" y="555" fontSize="12" fill="#cbd5e1" fontWeight="600" textAnchor="middle">Execution aligned</text>
          <text x="685" y="570" fontSize="12" fill="#cbd5e1" fontWeight="600" textAnchor="middle">with MiCA</text>
        </g>
      </svg>
    </div>
  );
}
