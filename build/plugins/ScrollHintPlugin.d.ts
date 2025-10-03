import { ScrollbarPlugin } from "smooth-scrollbar";
export interface ScrollHintOptions {
    height?: number;
    color?: string;
    fade?: number;
}
export default class ScrollHintPlugin extends ScrollbarPlugin {
    static pluginName: string;
    static defaultOptions: ScrollHintOptions;
    private topHint;
    private bottomHint;
    onInit(): void;
    onRender(): void;
    onDestroy(): void;
}
