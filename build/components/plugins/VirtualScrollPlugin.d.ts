import { BasePlugin, type ScrollDelta } from "./BasePlugin";
export default class VirtualScrollPlugin extends BasePlugin {
    static pluginName: string;
    transformDelta(delta: ScrollDelta): ScrollDelta;
}
