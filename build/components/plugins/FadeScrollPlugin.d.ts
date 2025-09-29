import { ScrollbarPlugin } from "smooth-scrollbar";
export default class FadeScrollPlugin extends ScrollbarPlugin {
    static pluginName: string;
    private _timeout?;
    onRender(): void;
    onDestroy(): void;
}
