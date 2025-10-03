import { Scrollbar } from "smooth-scrollbar/scrollbar";
import type { ScrollbarOptions, ScrollStatus } from "smooth-scrollbar/interfaces";
export interface IFUseScrollbarOptions extends Partial<ScrollbarOptions> {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    thumbColor?: string;
    trackColor?: string;
    damping?: number;
    renderByPixels?: boolean;
    alwaysShowTracks?: boolean;
    continuousScrolling?: boolean;
    plugins?: Record<string, any>;
    overEffect?: "bounce" | "glow";
    pluginLoaders?: Record<string, () => Promise<any>>;
    initialX?: number;
    initialY?: number;
    onScroll?(status: ScrollStatus, sb?: Scrollbar | null): void;
    onScrollStart?(): void;
    onScrollEnd?(): void;
}
export interface IFNeoScrollbarHandle {
    scrollTo(x: number, y: number, duration?: number): void;
    scrollToTop(duration?: number): void;
    scrollToBottom(duration?: number): void;
    update(): void;
    destroy(): void;
}
export declare function useNeoScrollbar<T extends HTMLElement = HTMLDivElement>(options?: IFUseScrollbarOptions): {
    ref: import("react").MutableRefObject<T>;
    api: IFNeoScrollbarHandle;
};
export { Scrollbar };
