import { ScrollbarPlugin } from "smooth-scrollbar";
export interface EdgeBounceOptions {
    distance?: number;
    duration?: number;
}
export default class EdgeBouncePlugin extends ScrollbarPlugin {
    static pluginName: string;
    options: EdgeBounceOptions;
    private animating;
    onRender(): void;
}
