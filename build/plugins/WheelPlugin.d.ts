import { ScrollbarPlugin } from "smooth-scrollbar";
export interface WheelOptions {
    multiplier?: number;
}
export default class WheelPlugin extends ScrollbarPlugin {
    static pluginName: string;
    static defaultOptions: WheelOptions;
    options: WheelOptions;
    transformDelta(delta: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
}
