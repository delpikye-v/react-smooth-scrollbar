import { ScrollbarPlugin } from "smooth-scrollbar";
export default class EdgeEasingPlugin extends ScrollbarPlugin {
    static pluginName: string;
    transformDelta(delta: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
}
