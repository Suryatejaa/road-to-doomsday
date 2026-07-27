declare module "@/components/FaultyTerminal" {
    import type { FC, HTMLAttributes } from "react";

    export interface FaultyTerminalProps extends HTMLAttributes<HTMLDivElement> {
        scale?: number;
        gridMul?: [number, number];
        digitSize?: number;
        timeScale?: number;
        pause?: boolean;
        scanlineIntensity?: number;
        glitchAmount?: number;
        flickerAmount?: number;
        noiseAmp?: number;
        chromaticAberration?: number;
        dither?: number;
        curvature?: number;
        tint?: string;
        mouseReact?: boolean;
        mouseStrength?: number;
        pageLoadAnimation?: boolean;
        brightness?: number;
    }

    const FaultyTerminal: FC<FaultyTerminalProps>;
    export default FaultyTerminal;
}