import React from 'react';
import { Scrollbar } from 'smooth-scrollbar/scrollbar';
import { ScrollbarOptions, ScrollStatus } from 'smooth-scrollbar/interfaces';
import { OverscrollOptions } from 'smooth-scrollbar/plugins/overscroll';
interface ISize {
    maxWidth?: string | number;
    maxHeight?: string | number;
    width?: string | number;
    height?: string | number;
}
export interface IScrollbarPlugin {
    overscroll?: Partial<Omit<OverscrollOptions, 'effect'>> & {
        effect?: 'bounce' | 'glow';
    };
}
export interface IScrollbarProps extends ISize {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    plugins?: IScrollbarPlugin;
    overEffect?: 'bounce' | 'glow';
    onScroll?: (status: ScrollStatus, scrollbar: Scrollbar | null) => void;
    getScrollbarRef?: (ref: React.MutableRefObject<Scrollbar | null>) => void;
}
export type TScrollbarProps = Partial<ScrollbarOptions> & React.PropsWithChildren<IScrollbarProps>;
declare const ReactSmoothScrollbar: (props: TScrollbarProps) => React.JSX.Element;
export { Scrollbar };
export type { ScrollbarOptions, ScrollStatus, OverscrollOptions };
export default ReactSmoothScrollbar;
