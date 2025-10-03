import { ScrollbarPlugin } from "smooth-scrollbar";
export interface HighlightItemOptions {
    selector: string;
    className?: string;
    mode?: "center" | "top" | "bottom" | "firstVisible" | "lastVisible";
}
export default class HighlightItemPlugin extends ScrollbarPlugin {
    static pluginName: string;
    private items;
    private currentActive?;
    transformOptions(options: HighlightItemOptions): {
        selector: string;
        className: string;
        mode: "center" | "top" | "bottom" | "firstVisible" | "lastVisible";
    };
    onInit(): void;
    onRender(): void;
    onDestroy(): void;
}
