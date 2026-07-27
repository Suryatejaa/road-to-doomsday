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
  }
  
];



interface CategoryTabsProps {
  activeKey: string;
  onSelect: (key: string) => void;
}

export function CategoryTabs({ activeKey, onSelect }: CategoryTabsProps) {
  return (
    <div
      className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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
              "group relative snap-start shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200",
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

export const importanceOptions = ["all", "Mandatory", "Hi-Recmd", "Optnl"] as const;
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
  const colors = categoryColorClasses["mandatory"];
  return (
    <div className="flex gap-2" role="tablist" aria-label="Importance tiers">
      {importanceOptions.map((opt) => {
        const isActive = selected === opt;
        const label = opt === "all" ? "All" : `${opt}`;
        return (
          <button
            key={String(opt)}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(opt)}
            /* FIXED: Replaced text-align-center with flex items-center justify-center */
            className={cn(
              "flex items-center justify-center rounded-full px-1 py-1 text-xs font-semibold uppercase tracking-wider transition",
              isActive ? "bg-card border-[var(--glow-color)] text-foreground" : "bg-card/70 text-muted-foreground",
            )}
            style={{ ["--glow-color" as string]: `var(--cat-mandatory)` }}
          >
            {/* FIXED: Removed inline-block and mr-2 since the parent button flex container handles spacing via gap */}
            <span className={cn("size-2 rounded-full mr-2", colors.bg)} aria-hidden="true" />
            {label}
          </button>
        );
      })}
    </div>
  );
}