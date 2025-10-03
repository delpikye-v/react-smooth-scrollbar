import { ScrollbarPlugin } from "smooth-scrollbar";
export interface MinimapOptions {
    width?: string;
    color?: string;
    inset?: string;
    borderRadius?: string;
}
export default class MinimapPlugin extends ScrollbarPlugin {
    static pluginName: string;
    options: MinimapOptions;
    private minimapEl;
    onInit(): void;
    onRender(): void;
    onDestroy(): void;
}
