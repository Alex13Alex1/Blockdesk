import React from 'react';

/**
 * Infrastructure Diagram Component
 * Displays the official Blockdesk infrastructure diagram image
 * 
 * BRANDING: Uses "Blockdesk" (not Blockvis) for consistency
 * The image file should be placed in: public/images/infrastructure-diagram.jpg
 */
export function InfrastructureDiagram() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8 shadow-lg">
      <div className="relative w-full">
        {/* ENHANCED: Responsive image with mobile optimization */}
        <img
          src="/images/infrastructure-diagram.jpg"
          alt="Blockdesk - MiCA-Native OTC & Settlement Platform for Europe. Market Context, Solution, Strategic Partners, Fiat Settlement Layer, and Foundational Elements."
          className="h-auto w-full object-contain"
          loading="lazy"
          style={{
            // Mobile: show simplified view, desktop: full detail
            maxHeight: '600px',
          }}
          onError={(e) => {
            // Try alternative image if first one fails
            const img = e.target as HTMLImageElement;
            if (!img.src.includes('infrastructure-diagram-alt.jpg')) {
              img.src = '/images/infrastructure-diagram-alt.jpg';
            } else if (!img.src.includes('platform-overview.jpg')) {
              img.src = '/images/platform-overview.jpg';
            }
          }}
        />
        {/* Mobile: Add scroll hint for complex diagram */}
        <div className="md:hidden mt-4 text-center">
          <p className="text-xs text-slate-400">Scroll horizontally to view full diagram</p>
        </div>
      </div>
    </div>
  );
}
