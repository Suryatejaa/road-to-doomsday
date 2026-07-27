import { cn } from "@/lib/utils";
import { categoryColorClasses, type CategoryToken } from "@/lib/category-styles";

export interface FilterGroup {
  key: string;
  label: string;
  token: CategoryToken;
  categories: string[] | "all";
}

export const filterGroups: FilterGroup[] = [
  { key: "all", label: "Complete Timeline", token: "tva", categories: "all" },
  {
    key: "mcu",
    label: "MCU Sacred Timeline",
    token: "mcu",
    categories: [
      "MCU Sacred Timeline",
      "MCU Multiverse Nexus",
      "MCU New Avengers Build",
      "MCU Cosmic Lore",
      "MCU Earth-616 Frontline",
    ],
  },
  { key: "street", label: "Street Level Core", token: "street", categories: ["Street Level Ecosystem"] },
  {
    key: "fox",
    label: "Fox Mutant Legacy",
    token: "fox",
    categories: ["Fox Mutant Legacy", "Fox Legacy Foundation", "MCU Mutant Animation"],
  },
  {
    key: "sony",
    label: "Sony Animation (Miles Morales)",
    token: "sony",
    categories: ["Sony Animation Canon", "Alternative Multi-Universe"],
  },
  {
    key: "cosmic",
    label: "Cosmic Lore & Multiverse",
    token: "cosmic",
    categories: ["MCU Cosmic Lore", "Alternative Multi-Universe"],
  },
  {
    key: "legacy",
    label: "Legacy & Alternate Universes",
    token: "legacy",
    categories: ["Alternative Multi-Universe", "MCU Multiverse Nexus"],
  },
  {
    key: "tva",
    label: "TVA & Multiversal Oversight",
    token: "tva",
    categories: ["MCU Multiverse Nexus", "MCU Sacred Timeline"],
  },
  {
    key: "frontline",
    label: "Frontline & TVA Operations",
    token: "frontline",
    categories: ["MCU Earth-616 Frontline", "MCU Multiverse Nexus"],  
  },
  {
    key:"animation",
    label: "Animation Canon & Sub-Clusters",
    token: "animation",
    categories: ["MCU Mutant Animation", "Sony Animation Canon"],
  }
  
];

interface CategoryTabsProps {
  activeKey: string;
  onSelect: (key: string) => void;
}

export function CategoryTabs({ activeKey, onSelect }: CategoryTabsProps) {
  return (
    <div
      className="flex snap-x snap-mandatory gap-1 overflow-x-auto pb-1 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label="Universe filters"
    >
      {filterGroups.map((group) => {
        const isActive = activeKey === group.key;
        const colors = categoryColorClasses[group.token];
        return (
          <button
            key={group.key}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onSelect(group.key)}
            className={cn(
              "group relative snap-start shrink-0 inline-flex items-center gap-2 rounded-full border px-2 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200",
              "border-border/70 bg-card/70 text-muted-foreground backdrop-blur",
              "hover:text-foreground hover:border-[var(--glow-color)]",
              isActive && "text-foreground border-[var(--glow-color)] bg-card",
            )}
            style={{ ["--glow-color" as string]: `var(--cat-${group.token === "tva" ? "mcu" : group.token})`, boxShadow: isActive ? `0 0 18px color-mix(in oklab, var(--${group.token === "tva" ? "tva" : `cat-${group.token}`}) 55%, transparent)` : undefined }}
          >
            <span className={cn("size-2 rounded-full", colors.bg)} aria-hidden="true" />
            {group.label}
          </button>
        );
      })}
    </div>
  );
}

export const importanceOptions = ["all", "Mndtry", "Hi-Recmd", "Optnl"] as const;
export type ImportanceOption = (typeof importanceOptions)[number];

interface ImportanceTabsProps {
  selected: ImportanceOption;
  onSelect: (v: ImportanceOption) => void;
}

export interface ImportanceTierProps {
  tier: string | number;
}

export function ImportanceTier({ tier }: ImportanceTierProps) {
  const colors = categoryColorClasses["mandatory"];
  return (
    <div className="flex items-center gap-1">
      <span className={cn("size-2 rounded-full", colors.bg)} aria-hidden="true" />
      {/* FIXED: Changed text-aling-centerm to text-center */}
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center">
        {typeof tier === "string" ? tier : `Tier ${tier}`}
      </span>
    </div>
  );
}


export function ImportanceTabs({ selected, onSelect }: ImportanceTabsProps) {
  return (
    <div className="flex flex-wrap gap-1" role="tablist" aria-label="Importance tiers">
      {importanceOptions.map((opt) => {
        const isActive = selected === opt;
        const label = opt === "all" ? "All" : `${opt}`;
        
        // FIX: Map your uppercase option strings to active tokens in categoryColorClasses
        let token: CategoryToken = "mcu"; // Default fallback
        
        if (opt === "Mndtry") token = "street"; // e.g., mapping to your working red dot
        if (opt === "Hi-Recmd") token = "mcu";    // e.g., mapping to your working yellow dot
        if (opt === "Optnl") token = "fox";       // e.g., mapping to your working green dot

        const colors = categoryColorClasses[token];

        return (
          <button
            key={String(opt)}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(opt)}
            className={cn(
              "flex items-center justify-center rounded-full px-2 py-1.5 text-xs font-semibold uppercase tracking-wider transition",
              isActive 
                ? "bg-card border-[var(--glow-color)] text-foreground" 
                : "bg-card/70 text-muted-foreground border border-transparent"
            )}
            style={{ ["--glow-color" as string]: `var(--cat-${token})` }}
          >
            {/* Show a working dot for every item except the global "All" option */}
            {opt !== "all" && (
              <span 
                className={cn(
                  "size-2 rounded-full mr-1.5 block", 
                  colors.bg // This now pulls valid classes like "bg-cat-street"
                )} 
                aria-hidden="true" 
              />
            )}
            {label}
          </button>
        );
      })}
    </div>
  );
}

