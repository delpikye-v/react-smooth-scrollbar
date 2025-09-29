import { BasePlugin, type ScrollDelta } from "./BasePlugin";
export default class MomentumPlugin extends BasePlugin {
    static pluginName: string;
    transformDelta(delta: ScrollDelta): ScrollDelta;
}
