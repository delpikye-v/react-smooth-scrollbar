import { ScrollbarPlugin } from "smooth-scrollbar";
export default class MinimapPlugin extends ScrollbarPlugin {
    static pluginName: string;
    private minimapEl;
    onInit(): void;
    onRender(): void;
    onDestroy(): void;
}
