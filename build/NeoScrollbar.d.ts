import React from "react";
import { type IFUseScrollbarOptions, type IFNeoScrollbarHandle } from "./useNeoScrollbar";
export interface IFNeoScrollbarProps extends React.PropsWithChildren<IFUseScrollbarOptions> {
    thumbColor?: string;
    thumbHoverColor?: string;
    thumbSize?: string | number;
    thumbHoverSize?: number;
    trackColor?: string;
    trackSize?: string | number;
    trackHoverSize?: string | number;
    trackOpacity?: number;
    showOnHover?: boolean;
    alwaysShowTracks?: boolean;
    visibleOpacity?: number;
    hideNativeScrollbar?: boolean;
}
declare const NeoScrollbar: React.ForwardRefExoticComponent<IFNeoScrollbarProps & React.RefAttributes<IFNeoScrollbarHandle>>;
export default NeoScrollbar;
