import { Scrollbar } from "smooth-scrollbar/scrollbar";
import type { ScrollStatus } from "smooth-scrollbar/interfaces";
export interface IFUseScrollbarOptions {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    thumbColor?: string;
    trackColor?: string;
    thumbSize?: string;
    damping?: number;
    thumbMinSize?: number;
    renderByPixels?: boolean;
    alwaysShowTracks?: boolean;
    continuousScrolling?: boolean;
    plugins?: any;
    overEffect?: "bounce" | "glow";
    initialX?: number;
    initialY?: number;
    onScroll?(status: ScrollStatus, sb?: Scrollbar | null): void;
    onScrollStart?(): void;
    onScrollEnd?(): void;
}
export interface IFScrollbarHandleLite {
    scrollTo(x: number, y: number, duration?: number): void;
    scrollToTop(duration?: number): void;
    scrollToBottom(duration?: number): void;
    update(): void;
    destroy(): void;
}
export declare function useNeoScrollbar<T extends HTMLElement = HTMLDivElement>(options?: IFUseScrollbarOptions): {
    ref: import("react").MutableRefObject<T>;
    api: IFScrollbarHandleLite;
};
export { Scrollbar };
