import { BasePlugin, type ScrollDelta } from "./BasePlugin";
export interface MouseWheelOptions {
    multiplier?: number;
}
export default class MouseWheelPlugin extends BasePlugin {
    static pluginName: string;
    options: MouseWheelOptions;
    transformDelta(delta: ScrollDelta): ScrollDelta;
}
