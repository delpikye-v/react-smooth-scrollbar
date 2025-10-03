import React from "react";
import { type IFUseScrollbarOptions, type IFScrollbarHandle } from "./useFullScrollbar";
export interface IFullScrollbarProps extends React.PropsWithChildren<IFUseScrollbarOptions> {
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
}
declare const FullScrollbar: React.ForwardRefExoticComponent<IFullScrollbarProps & React.RefAttributes<IFScrollbarHandle>>;
export default FullScrollbar;
