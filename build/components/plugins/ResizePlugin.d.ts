import { ScrollbarPlugin } from "smooth-scrollbar";
export default class ResizePlugin extends ScrollbarPlugin {
    static pluginName: string;
    private observer?;
    onInit(): void;
    onDestroy(): void;
}
