import { BasePlugin } from "./BasePlugin";
import type Scrollbar from "smooth-scrollbar";
export default class ContentSizePlugin extends BasePlugin {
    static pluginName: string;
    private _observer?;
    onInit(scrollbar: Scrollbar): void;
    onDestroy(_: Scrollbar): void;
}
