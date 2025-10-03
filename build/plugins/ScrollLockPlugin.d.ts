import { ScrollbarPlugin } from "smooth-scrollbar";
export interface ScrollLockOptions {
    lockX?: boolean;
    lockY?: boolean;
    enabled?: boolean;
}
export default class ScrollLockPlugin extends ScrollbarPlugin {
    static pluginName: string;
    options: ScrollLockOptions;
    transformDelta(delta: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
    lockAll(): void;
    unlock(): void;
    lockXOnly(): void;
    lockYOnly(): void;
}
