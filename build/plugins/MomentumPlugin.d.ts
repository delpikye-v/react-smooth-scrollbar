import { BasePlugin, type ScrollDelta } from "./BasePlugin";
export interface MomentumOptions {
    multiplier?: number;
}
export default class MomentumPlugin extends BasePlugin {
    static pluginName: string;
    options: MomentumOptions;
    transformDelta(delta: ScrollDelta): ScrollDelta;
}
