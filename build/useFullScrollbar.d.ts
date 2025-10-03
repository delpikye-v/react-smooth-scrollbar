import { Scrollbar } from "smooth-scrollbar/scrollbar";
import type { ScrollbarOptions, ScrollStatus } from "smooth-scrollbar/interfaces";
import type { OverscrollOptions } from "smooth-scrollbar/plugins/overscroll";
export interface IFUseScrollbarPlugin {
    overscroll?: Partial<Omit<OverscrollOptions, "effect">> & {
        effect?: "bounce" | "glow";
    };
    [key: string]: any;
}
export interface IFUseScrollbarOptions extends Partial<ScrollbarOptions> {
    id?: string;
    className?: string;
    disableKeyboard?: boolean;
    style?: React.CSSProperties;
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    thumbColor?: string;
    trackColor?: string;
    thumbSize?: string | number;
    thickness?: string | number;
    hoverColor?: string;
    alwaysShowTracks?: boolean;
    hideNativeScrollbar?: boolean;
    plugins?: IFUseScrollbarPlugin;
    overEffect?: "bounce" | "glow";
    initialX?: number;
    initialY?: number;
    pluginLoaders?: Record<string, () => Promise<any>>;
    damping?: number;
    momentum?: number;
    onScroll?: (status: ScrollStatus, scrollbar: Scrollbar | null) => void;
    onScrollStart?: () => void;
    onScrollEnd?: () => void;
    onReachTop?: () => void;
    onReachBottom?: () => void;
    onReachLeft?: () => void;
    onReachRight?: () => void;
    onReachPercentage?: (percent: number, status: ScrollStatus, scrollbar: Scrollbar | null) => void;
    onWheel?: (evt: WheelEvent, scrollbar: Scrollbar | null) => void;
    onResize?: (entry: ResizeObserverEntry, scrollbar: Scrollbar | null) => void;
}
export interface IFScrollbarHandle {
    scrollTo: (x: number, y: number, duration?: number) => void;
    scrollBy: (dx: number, dy: number, duration?: number) => void;
    scrollToTop: (duration?: number) => void;
    scrollToBottom: (duration?: number) => void;
    scrollToLeft: (duration?: number) => void;
    scrollToRight: (duration?: number) => void;
    scrollToPercent: (xPercent: number, yPercent: number, duration?: number) => void;
    scrollToElement: (el: HTMLElement | string, options?: {
        align?: "start" | "center" | "end";
        duration?: number;
    }) => void;
    scrollIntoViewIfNeeded: (el: HTMLElement | string, padding?: number, duration?: number) => void;
    getScrollPosition: () => {
        x: number;
        y: number;
    };
    getScrollPercent: () => {
        xPercent: number;
        yPercent: number;
    };
    setSpeed: (multiplier: number) => void;
    disableScroll: () => void;
    enableScroll: () => void;
    update: () => void;
    destroy: () => void;
    getScrollbar: () => Scrollbar | null;
}
export declare function useFullScrollbar<T extends HTMLElement = HTMLDivElement>(options?: IFUseScrollbarOptions): {
    ref: import("react").MutableRefObject<T>;
    initScrollbar: (element: T | null) => Promise<void>;
    api: IFScrollbarHandle;
};
export { Scrollbar, type ScrollbarOptions, type ScrollStatus, type OverscrollOptions, };
