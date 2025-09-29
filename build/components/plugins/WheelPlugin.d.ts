import { BasePlugin, type ScrollDelta } from "./BasePlugin";
export default class WheelPlugin extends BasePlugin {
    static pluginName: string;
    transformDelta(delta: ScrollDelta): ScrollDelta;
}
