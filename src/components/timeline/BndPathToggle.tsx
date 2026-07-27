import { cn } from "@/lib/utils";

interface BndPathToggleProps {
  active: boolean;
  onToggle: (active: boolean) => void;
}

/**
 * A single, exclusive toggle for the curated "Road to Spider-Man: Brand New Day"
 * watch path — deliberately separate from CategoryTabs and ImportanceTabs since
 * it isn't a universe filter or a tier filter, it's a specific case file.
 */
export function BndPathToggle({ active, onToggle }: BndPathToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      aria-label="Road to Spider-Man: Brand New Day watch path"
      onClick={() => onToggle(!active)}
      className={cn(
        "group relative inline-flex items-center gap-5 justify-between rounded-sm border px-1 -py-4 transition-all duration-200",
        "border-[#4a3a1e] bg-[#14100B]/70 backdrop-blur animate-pulse",
        "hover:border-[#F2A93B]/60",
        active && "border-[#F2A93B] bg-[#241c0c]/80 shadow-[0_0_14px_rgba(242,169,59,0.25)] animate-none"
      )}
    >
      {!active && (<span className="relative flex text-[#F2A93B]/90 opacity-70 animate-pulse">
        {active && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F2A93B] opacity-75" />
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full transition-colors",
            active ? "bg-[#F2A93B]" : "bg-[#4a3a1e]"
          )}
        />
        Road To
      </span>
      )}
      {/* Case-file emblem — desaturated until the path is active, like an
          unlit terminal icon powering on */}
      <img
        src="/images/bnd-logo.png"
        alt=""
        className={cn(
          "h-10 w-auto object-contain opacity-70 transition-all duration-300",
          "group-hover:grayscale-0 group-hover:opacity-90",
          active && "grayscale-0 opacity-100"
        )}
      />
    </button>
  );
}
