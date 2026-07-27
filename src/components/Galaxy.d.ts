declare module "@/components/Galaxy" {
  import type { FC, HTMLAttributes } from "react";

  export interface GalaxyProps extends HTMLAttributes<HTMLDivElement> {
    focal?: [number, number];
    rotation?: [number, number];
    starSpeed?: number;
    density?: number;
    hueShift?: number;
    disableAnimation?: boolean;
    speed?: number;
    mouseInteraction?: boolean;
    glowIntensity?: number;
    saturation?: number;
    mouseRepulsion?: boolean;
    repulsionStrength?: number;
    twinkleIntensity?: number;
    rotationSpeed?: number;
    autoCenterRepulsion?: number;
    transparent?: boolean;
  }

  const Galaxy: FC<GalaxyProps>;
  export default Galaxy;
}