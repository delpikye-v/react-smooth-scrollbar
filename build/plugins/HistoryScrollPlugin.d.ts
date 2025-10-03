import { ScrollbarPlugin } from "smooth-scrollbar";
export interface HistoryScrollOptions {
    key?: string;
    session?: boolean;
    onRestore?: (pos: {
        x: number;
        y: number;
    }) => void;
    onSave?: (pos: {
        x: number;
        y: number;
    }) => void;
}
export default class HistoryScrollPlugin extends ScrollbarPlugin {
    static pluginName: string;
    static defaultOptions: HistoryScrollOptions;
    options: HistoryScrollOptions;
    private _save?;
    onInit(): void;
    onDestroy(): void;
}
