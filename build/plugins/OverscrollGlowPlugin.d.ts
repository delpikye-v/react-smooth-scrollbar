import { ScrollbarPlugin } from "smooth-scrollbar";
export interface OverscrollGlowOptions {
    effect?: "glow" | "bounce";
    color?: string;
    strength?: number;
}
export default class OverscrollGlowPlugin extends ScrollbarPlugin {
    static pluginName: string;
    static defaultOptions: OverscrollGlowOptions;
    transformDelta(delta: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
}
