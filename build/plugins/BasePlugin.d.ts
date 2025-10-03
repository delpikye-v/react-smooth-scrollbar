import type Scrollbar from "smooth-scrollbar";
export interface ScrollDelta {
    x: number;
    y: number;
}
export declare abstract class BasePlugin {
    static pluginName: string;
    transformDelta(delta: ScrollDelta): ScrollDelta;
    onInit(_: Scrollbar): void;
    onDestroy(_: Scrollbar): void;
}
