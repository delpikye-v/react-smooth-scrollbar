import { ScrollbarPlugin } from "smooth-scrollbar";
export interface BounceEffectOptions {
    distance?: number;
    duration?: number;
    easing?: string;
}
export default class BounceEffectPlugin extends ScrollbarPlugin {
    static pluginName: string;
    options: BounceEffectOptions;
    private _bouncing;
    onRender(): void;
    onDestroy(): void;
}
