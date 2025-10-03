import { ScrollbarPlugin } from "smooth-scrollbar";
export interface FadeScrollOptions {
    fadeDelay?: number;
    visibleOpacity?: number;
    fadedOpacity?: number;
    includeX?: boolean;
}
export default class FadeScrollPlugin extends ScrollbarPlugin {
    static pluginName: string;
    options: FadeScrollOptions;
    private _timeout?;
    onInit(): void;
    onRender(): void;
    onDestroy(): void;
}
