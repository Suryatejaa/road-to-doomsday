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
      onClick={() => onToggle(!active)}
      className={cn(
        "group relative inline-flex items-center gap-2.5 rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-200",
        "border-[#4a3a1e]/60 bg-[#14100B]/70 text-[#D9C9A3]/70 backdrop-blur",
        "hover:border-[#F2A93B]/60 hover:text-[#EFE6D0]",
        active && "border-[#F2A93B] bg-[#241c0c]/80 text-[#F2A93B] shadow-[0_0_14px_rgba(242,169,59,0.25)]"
      )}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        {active && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F2A93B] opacity-75" />
        )}
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full transition-colors",
            active ? "bg-[#F2A93B]" : "bg-[#4a3a1e]"
          )}
        />
      </span>
      Road to Brand New Day
    </button>
  );
}
