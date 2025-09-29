import { ScrollbarPlugin } from "smooth-scrollbar";
export default class ScrollHintPlugin extends ScrollbarPlugin {
    static pluginName: string;
    private topHint;
    private bottomHint;
    onInit(): void;
    onRender(): void;
    onDestroy(): void;
}
