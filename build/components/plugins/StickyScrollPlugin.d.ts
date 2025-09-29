import { ScrollbarPlugin } from "smooth-scrollbar";
export interface StickyOptions {
    selector: string;
    top?: number;
}
export default class StickyScrollPlugin extends ScrollbarPlugin {
    static pluginName: string;
    private stickyEl?;
    onInit(): void;
    onRender(): void;
}
