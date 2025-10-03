import { ScrollbarPlugin } from "smooth-scrollbar";
export interface ResizePluginOptions {
    observeContent?: boolean;
    observeContainer?: boolean;
}
export default class ResizePlugin extends ScrollbarPlugin {
    static pluginName: string;
    options: ResizePluginOptions;
    private observer?;
    onInit(): void;
    onDestroy(): void;
}
