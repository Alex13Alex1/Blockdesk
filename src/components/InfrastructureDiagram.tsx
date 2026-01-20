import React from 'react';

/**
 * Infrastructure Diagram Component
 * Uses the official Blockdesk infographic image
 * BRANDING: Uses "Blockdesk" consistently (replaced Blockvis)
 * 
 * If image is not found, falls back to interactive SVG
 */
export function InfrastructureDiagram() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8 shadow-lg">
      {/* Try to use the official infographic image first */}
      <div className="relative w-full">
        <img
          src="/images/platform-overview.jpg"
          alt="Blockdesk - MiCA-Native OTC & Settlement Platform for Europe. Market Context, Solution, Strategic Partners, Fiat Settlement Layer, and Foundational Elements."
          className="h-auto w-full object-contain"
          loading="lazy"
          onError={(e) => {
            // If image fails, show SVG fallback
            const img = e.target as HTMLImageElement;
            img.style.display = 'none';
            const svgContainer = img.parentElement?.querySelector('.svg-fallback');
            if (svgContainer) {
              (svgContainer as HTMLElement).style.display = 'block';
            }
          }}
        />
        {/* SVG Fallback - hidden by default, shown if image fails */}
        <div className="svg-fallback hidden">
          <svg 
            viewBox="0 0 1000 600" 
            className="h-auto w-full" 
            role="img" 
            aria-label="Blockdesk Infrastructure Diagram"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="glow1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="glow2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#22c55e" stopOpacity="0.4" />
                <stop offset="1" stopColor="#10b981" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#60a5fa" />
              </marker>
            </defs>

            {/* Title - BRANDING: Blockdesk (not Blockvis) */}
            <text 
              x="500" 
              y="40" 
              fontSize="20" 
              fill="#e0e7ff" 
              fontWeight="800" 
              textAnchor="middle"
              className="font-sans"
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
              strokeWidth="2" 
              opacity="0.8" 
              filter="url(#glow)"
              className="transition-all duration-300 hover:opacity-100"
            />
            <text x="40" y="115" fontSize="16" fill="#e0e7ff" fontWeight="700">Market Context</text>
            <text x="40" y="145" fontSize="13" fill="#cbd5e1">• MiCA Regulation</text>
            <text x="40" y="170" fontSize="13" fill="#cbd5e1">• Institutional Demand</text>
            <text x="40" y="195" fontSize="13" fill="#cbd5e1">• Shift Towards Compliance &amp; Settlement</text>

            {/* Arrow from Market Context to Solution */}
            <path 
              d="M220 170 L340 250" 
              stroke="#60a5fa" 
              strokeWidth="3" 
              fill="none" 
              filter="url(#glow)"
              markerEnd="url(#arrowhead)"
            />

            {/* Solution - Central Circle */}
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
            <text x="500" y="200" fontSize="18" fill="#e0e7ff" fontWeight="800" textAnchor="middle">Solution</text>
            
            {/* RFQ OTC Execution - Top Left Quadrant */}
            <g className="hover:opacity-100 opacity-90 transition-opacity">
              <rect x="420" y="180" width="80" height="60" rx="8" fill="#1e40af" opacity="0.6" stroke="#22c55e" />
              {/* Document with pen icon */}
              <rect x="435" y="190" width="20" height="25" rx="2" fill="#e0e7ff" opacity="0.8" />
              <line x1="440" y1="200" x2="450" y2="200" stroke="#1e40af" strokeWidth="1.5" />
              <line x1="440" y1="205" x2="450" y2="205" stroke="#1e40af" strokeWidth="1.5" />
              <line x1="440" y1="210" x2="448" y2="210" stroke="#1e40af" strokeWidth="1.5" />
              <circle cx="458" cy="200" r="3" fill="#f59e0b" />
              <text x="460" y="250" fontSize="11" fill="#e0e7ff" fontWeight="600" textAnchor="middle">RFQ OTC Execution</text>
            </g>

            {/* Crypto↔Fiat Settlement - Top Right Quadrant */}
            <g className="hover:opacity-100 opacity-90 transition-opacity">
              <rect x="500" y="180" width="80" height="60" rx="8" fill="#1e40af" opacity="0.6" stroke="#22c55e" />
              {/* Bitcoin and Euro exchange icon */}
              <circle cx="525" cy="200" r="10" fill="#f59e0b" />
              <text x="525" y="205" fontSize="10" fill="#1e40af" fontWeight="700" textAnchor="middle">₿</text>
              <text x="540" y="200" fontSize="14" fill="#e0e7ff">↔</text>
              <circle cx="555" cy="200" r="10" fill="#22c55e" />
              <text x="555" y="205" fontSize="10" fill="#ffffff" fontWeight="700" textAnchor="middle">€</text>
              <text x="540" y="250" fontSize="11" fill="#e0e7ff" fontWeight="600" textAnchor="middle">Crypto↔Fiat Settlement</text>
            </g>

            {/* Institutional Liquidity - Bottom Left Quadrant */}
            <g className="hover:opacity-100 opacity-90 transition-opacity">
              <rect x="420" y="250" width="80" height="60" rx="8" fill="#1e40af" opacity="0.6" stroke="#22c55e" />
              {/* Building/bank icon */}
              <rect x="435" y="260" width="30" height="25" rx="2" fill="#e0e7ff" opacity="0.8" />
              <rect x="440" y="265" width="6" height="6" fill="#1e40af" />
              <rect x="448" y="265" width="6" height="6" fill="#1e40af" />
              <rect x="456" y="265" width="6" height="6" fill="#1e40af" />
              <rect x="440" y="273" width="6" height="6" fill="#1e40af" />
              <rect x="448" y="273" width="6" height="6" fill="#1e40af" />
              <rect x="456" y="273" width="6" height="6" fill="#1e40af" />
              <polygon points="435,260 450,250 465,260" fill="#e0e7ff" opacity="0.8" />
              <text x="460" y="320" fontSize="11" fill="#e0e7ff" fontWeight="600" textAnchor="middle">Institutional Liquidity</text>
            </g>

            {/* Compliance & Reporting - Bottom Right Quadrant */}
            <g className="hover:opacity-100 opacity-90 transition-opacity">
              <rect x="500" y="250" width="80" height="60" rx="8" fill="#1e40af" opacity="0.6" stroke="#22c55e" />
              {/* Clipboard with checkmark icon */}
              <rect x="515" y="260" width="20" height="25" rx="2" fill="#e0e7ff" opacity="0.8" />
              <rect x="518" y="263" width="14" height="3" rx="1" fill="#1e40af" />
              <path d="M520 275 L525 280 L535 270" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <text x="540" y="320" fontSize="11" fill="#e0e7ff" fontWeight="600" textAnchor="middle">Compliance &amp; Reporting</text>
            </g>

            {/* Arrow from Solution to Strategic Partners */}
            <path 
              d="M620 250 L780 170" 
              stroke="#60a5fa" 
              strokeWidth="3" 
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
              strokeWidth="2" 
              opacity="0.8" 
              filter="url(#glow)"
              className="transition-all duration-300 hover:opacity-100"
            />
            <text x="800" y="115" fontSize="16" fill="#e0e7ff" fontWeight="700">Strategic Partners</text>
            
            {/* Banks icon */}
            <g>
              <rect x="805" y="125" width="20" height="15" rx="2" fill="#e0e7ff" opacity="0.8" />
              <rect x="808" y="128" width="5" height="4" fill="#1e40af" />
              <rect x="815" y="128" width="5" height="4" fill="#1e40af" />
              <rect x="822" y="128" width="5" height="4" fill="#1e40af" />
              <polygon points="805,125 815,120 825,125" fill="#e0e7ff" opacity="0.8" />
              <text x="835" y="137" fontSize="13" fill="#cbd5e1">Banks</text>
            </g>
            
            {/* PSP & Fintech icon (shopping cart) */}
            <g>
              <rect x="808" y="148" width="12" height="10" rx="1" fill="#e0e7ff" opacity="0.8" />
              <circle cx="812" cy="152" r="2" fill="#1e40af" />
              <circle cx="818" cy="152" r="2" fill="#1e40af" />
              <text x="835" y="157" fontSize="13" fill="#cbd5e1">PSP &amp; Fintech</text>
            </g>
            
            {/* Exchanges & Brokers icon (bar chart) */}
            <g>
              <rect x="808" y="168" width="3" height="8" fill="#e0e7ff" opacity="0.8" />
              <rect x="813" y="165" width="3" height="11" fill="#e0e7ff" opacity="0.8" />
              <rect x="818" y="170" width="3" height="6" fill="#e0e7ff" opacity="0.8" />
              <rect x="823" y="163" width="3" height="13" fill="#e0e7ff" opacity="0.8" />
              <text x="835" y="177" fontSize="13" fill="#cbd5e1">Exchanges &amp; Brokers</text>
            </g>

            {/* Fiat Settlement Layer - Middle Bottom */}
            <rect 
              x="300" 
              y="380" 
              width="400" 
              height="100" 
              rx="20" 
              fill="#1e3a8a" 
              opacity="0.7" 
              stroke="#22c55e" 
              strokeWidth="2" 
              filter="url(#glow)"
              className="transition-all duration-300 hover:opacity-0.9"
            />
            <text x="500" y="415" fontSize="18" fill="#e0e7ff" fontWeight="800" textAnchor="middle">Fiat Settlement Layer</text>
            <text x="350" y="445" fontSize="13" fill="#cbd5e1">EMI Partnership</text>
            <text x="600" y="445" fontSize="13" fill="#cbd5e1">Internal Integration</text>

            {/* Foundational Elements - Bottom Hexagons */}
            
            {/* Architecture Defined (gears icon) */}
            <g className="hover:opacity-100 opacity-90 transition-opacity cursor-pointer">
              <polygon points="50,500 80,485 110,500 80,515" fill="#1e40af" opacity="0.6" stroke="#22c55e" strokeWidth="2" />
              <circle cx="80" cy="495" r="8" fill="#e0e7ff" opacity="0.8" />
              <circle cx="80" cy="495" r="5" fill="#1e40af" />
              <circle cx="75" cy="490" r="3" fill="#e0e7ff" opacity="0.8" />
              <circle cx="85" cy="490" r="3" fill="#e0e7ff" opacity="0.8" />
              <circle cx="75" cy="500" r="3" fill="#e0e7ff" opacity="0.8" />
              <circle cx="85" cy="500" r="3" fill="#e0e7ff" opacity="0.8" />
              <text x="80" y="525" fontSize="11" fill="#cbd5e1" textAnchor="middle">Architecture Defined</text>
            </g>

            {/* Regulatory Pathways (document with balance scale) */}
            <g className="hover:opacity-100 opacity-90 transition-opacity cursor-pointer">
              <polygon points="250,500 280,485 310,500 280,515" fill="#1e40af" opacity="0.6" stroke="#22c55e" strokeWidth="2" />
              <rect x="270" y="488" width="20" height="14" rx="1" fill="#e0e7ff" opacity="0.8" />
              <line x1="275" y1="492" x2="285" y2="492" stroke="#1e40af" strokeWidth="1" />
              <circle cx="275" cy="492" r="2" fill="#1e40af" />
              <circle cx="285" cy="492" r="2" fill="#1e40af" />
              <text x="280" y="525" fontSize="11" fill="#cbd5e1" textAnchor="middle">Regulatory Pathways</text>
            </g>

            {/* Partner Discussions (speech bubble) */}
            <g className="hover:opacity-100 opacity-90 transition-opacity cursor-pointer">
              <polygon points="450,500 480,485 510,500 480,515" fill="#1e40af" opacity="0.6" stroke="#22c55e" strokeWidth="2" />
              <ellipse cx="475" cy="492" rx="6" ry="5" fill="#e0e7ff" opacity="0.8" />
              <ellipse cx="485" cy="492" rx="6" ry="5" fill="#e0e7ff" opacity="0.8" />
              <path d="M475 496 Q480 500 485 496" stroke="#1e40af" strokeWidth="1.5" fill="none" />
              <text x="480" y="525" fontSize="11" fill="#cbd5e1" textAnchor="middle">Partner Discussions</text>
            </g>

            {/* Execution aligned with MiCA (intersecting arrows) */}
            <g className="hover:opacity-100 opacity-90 transition-opacity cursor-pointer">
              <polygon points="650,500 680,485 710,500 680,515" fill="#1e40af" opacity="0.6" stroke="#22c55e" strokeWidth="2" />
              <path d="M670 488 L675 493 L680 488" stroke="#e0e7ff" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M675 493 L675 498" stroke="#e0e7ff" strokeWidth="2" />
              <path d="M690 488 L685 493 L690 498" stroke="#e0e7ff" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M685 493 L680 493" stroke="#e0e7ff" strokeWidth="2" />
              <text x="680" y="525" fontSize="11" fill="#cbd5e1" textAnchor="middle">Execution aligned with MiCA</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
