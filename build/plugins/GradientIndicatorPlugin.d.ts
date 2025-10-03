import { ScrollbarPlugin } from "smooth-scrollbar";
export interface GradientIndicatorOptions {
    height?: number;
    color?: string;
    fadeDuration?: number;
    zIndex?: number;
}
export default class GradientIndicatorPlugin extends ScrollbarPlugin {
    static pluginName: string;
    private topEl;
    private bottomEl;
    transformOptions(options: GradientIndicatorOptions): {
        height: number;
        color: string;
        fadeDuration: number;
        zIndex: number;
    };
    onInit(): void;
    onRender(): void;
    onDestroy(): void;
}
