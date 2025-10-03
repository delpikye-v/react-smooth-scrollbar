import { ScrollbarPlugin } from "smooth-scrollbar";
export interface ScrollProgressOptions {
    /** Callback khi scroll, trả về phần trăm 0 → 100 */
    onProgress?: (percent: number) => void;
    /** throttle thời gian (ms) nếu muốn giới hạn tốc độ callback */
    throttle?: number;
}
export default class ScrollProgressPlugin extends ScrollbarPlugin {
    static pluginName: string;
    static defaultOptions: ScrollProgressOptions;
    options: ScrollProgressOptions;
    private rafId;
    private lastTime;
    onRender(): void;
    onDestroy(): void;
}
