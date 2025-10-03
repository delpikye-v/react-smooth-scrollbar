import { ScrollbarPlugin } from "smooth-scrollbar";
export interface EdgeEasingOptions {
    factor?: number;
    dynamic?: boolean;
}
export default class EdgeEasingPlugin extends ScrollbarPlugin {
    static pluginName: string;
    options: EdgeEasingOptions;
    transformDelta(delta: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
}
