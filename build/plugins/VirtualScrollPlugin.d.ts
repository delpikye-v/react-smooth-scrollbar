import { ScrollbarPlugin } from "smooth-scrollbar";
export interface VirtualScrollOptions {
    /** Số pixel mỗi bước ảo */
    step?: number;
}
export default class VirtualScrollPlugin extends ScrollbarPlugin {
    static pluginName: string;
    static defaultOptions: VirtualScrollOptions;
    options: VirtualScrollOptions;
    transformDelta(delta: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
}
