import { ScrollbarPlugin } from "smooth-scrollbar";
export interface ScrollSnapOptions {
    snapSelector: string;
    threshold?: number;
    align?: "start" | "center" | "end";
    duration?: number;
}
export default class ScrollSnapPlugin extends ScrollbarPlugin {
    static pluginName: string;
    static defaultOptions: ScrollSnapOptions;
    private rafId;
    onRender(): void;
    private handleSnap;
    onDestroy(): void;
}
