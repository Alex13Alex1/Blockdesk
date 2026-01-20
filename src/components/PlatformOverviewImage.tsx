/**
 * Component to display the platform overview image
 * Place your image file in public/images/platform-overview.png (or .jpg, .svg, .webp)
 * 
 * Supported formats: PNG, JPG, JPEG, SVG, WebP
 * Recommended: PNG for best compatibility
 */
export function PlatformOverviewImage() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8 shadow-lg">
      <div className="relative w-full">
        <img
          src="/images/platform-overview.jpg"
          alt="Blockdesk - MiCA-Native OTC & Settlement Platform for Europe. Market Context, Solution, Strategic Partners, Fiat Settlement Layer, and Foundational Elements."
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
