import { BasePlugin, type ScrollDelta } from "./BasePlugin";
export default class MouseWheelPlugin extends BasePlugin {
    static pluginName: string;
    transformDelta(delta: ScrollDelta): ScrollDelta;
}
