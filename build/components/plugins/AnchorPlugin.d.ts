import { ScrollbarPlugin } from "smooth-scrollbar";
declare class AnchorPlugin extends ScrollbarPlugin {
    static pluginName: string;
    onInit(): void;
    onDestroy(): void;
}
export default AnchorPlugin;
