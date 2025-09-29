import { ScrollbarPlugin } from "smooth-scrollbar";
interface ScrollSnapOptions {
    snapSelector: string;
    threshold: number;
}
export default class ScrollSnapPlugin extends ScrollbarPlugin {
    static pluginName: string;
    options: ScrollSnapOptions;
    onRender(): void;
}
export {};
