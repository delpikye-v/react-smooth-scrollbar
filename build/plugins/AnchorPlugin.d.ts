import { ScrollbarPlugin } from "smooth-scrollbar";
export interface AnchorPluginOptions {
    duration: number;
    align: "start" | "center" | "end";
    activeClass: string;
    offset: number;
    selector: string;
}
declare class AnchorPlugin extends ScrollbarPlugin {
    static pluginName: string;
    static defaultOptions: AnchorPluginOptions;
    private _handleClick?;
    private _links;
    onInit(): void;
    onRender(): void;
    onDestroy(): void;
}
export default AnchorPlugin;
