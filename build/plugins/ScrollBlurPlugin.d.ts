import { ScrollbarPlugin } from "smooth-scrollbar";
export interface ScrollBlurOptions {
    blurAmount?: number;
    duration?: number;
    zIndex?: number;
}
export default class ScrollBlurPlugin extends ScrollbarPlugin {
    static pluginName: string;
    options: ScrollBlurOptions;
    private _timeout?;
    private _blurLayer;
    onInit(): void;
    onRender(): void;
    onDestroy(): void;
}
