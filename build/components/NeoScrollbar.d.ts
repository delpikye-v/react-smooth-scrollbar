import React from "react";
import { type IFUseScrollbarOptions, type IFScrollbarHandleLite } from "./useNeoScrollbar";
export interface IFNeoScrollbarProps extends React.PropsWithChildren<IFUseScrollbarOptions> {
    thumbHoverColor?: string;
    thumbHoverSize?: string | number;
    hideNativeScrollbar?: boolean;
    showOnHover?: boolean;
    visibleOpacity?: number;
}
declare const NeoScrollbar: React.ForwardRefExoticComponent<IFNeoScrollbarProps & React.RefAttributes<IFScrollbarHandleLite>>;
export default NeoScrollbar;
