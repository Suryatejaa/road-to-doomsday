export const categoryTokenList = [
  "mcu",
  "street",
  "multiverse",
  "fox",
  "legacy",
  "sony",
  "cosmic",
  "animation",
  "frontline",
  "tva",
] as const;

export type CategoryToken = (typeof categoryTokenList)[number];

export const categoryColorClasses: Record<
  CategoryToken,
  { text: string; bg: string; bgSubtle: string; border: string; ring: string }
> = {
  mcu: {
    text: "text-cat-mcu",
    bg: "bg-cat-mcu",
    bgSubtle: "bg-cat-mcu/10",
    border: "border-cat-mcu",
    ring: "ring-cat-mcu",
  },
  street: {
    text: "text-cat-street",
    bg: "bg-cat-street",
    bgSubtle: "bg-cat-street/10",
    border: "border-cat-street",
    ring: "ring-cat-street",
  },
  multiverse: {
    text: "text-cat-multiverse",
    bg: "bg-cat-multiverse",
    bgSubtle: "bg-cat-multiverse/10",
    border: "border-cat-multiverse",
    ring: "ring-cat-multiverse",
  },
  fox: {
    text: "text-cat-fox",
    bg: "bg-cat-fox",
    bgSubtle: "bg-cat-fox/10",
    border: "border-cat-fox",
    ring: "ring-cat-fox",
  },
  legacy: {
    text: "text-cat-legacy",
    bg: "bg-cat-legacy",
    bgSubtle: "bg-cat-legacy/10",
    border: "border-cat-legacy",
    ring: "ring-cat-legacy",
  },
  sony: {
    text: "text-cat-sony",
    bg: "bg-cat-sony",
    bgSubtle: "bg-cat-sony/10",
    border: "border-cat-sony",
    ring: "ring-cat-sony",
  },
  cosmic: {
    text: "text-cat-cosmic",
    bg: "bg-cat-cosmic",
    bgSubtle: "bg-cat-cosmic/10",
    border: "border-cat-cosmic",
    ring: "ring-cat-cosmic",
  },
  animation: {
    text: "text-cat-animation",
    bg: "bg-cat-animation",
    bgSubtle: "bg-cat-animation/10",
    border: "border-cat-animation",
    ring: "ring-cat-animation",
  },
  frontline: {
    text: "text-cat-frontline",
    bg: "bg-cat-frontline",
    bgSubtle: "bg-cat-frontline/10",
    border: "border-cat-frontline",
    ring: "ring-cat-frontline",
  },
  tva: {
    text: "text-tva",
    bg: "bg-tva",
    bgSubtle: "bg-tva/10",
    border: "border-tva",
    ring: "ring-tva",
  },
};
