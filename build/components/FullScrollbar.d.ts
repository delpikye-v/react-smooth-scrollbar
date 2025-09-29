import React from "react";
import { type IFUseScrollbarOptions, type IFScrollbarHandle } from "./useFullScrollbar";
export interface IFullScrollbarProps extends React.PropsWithChildren<IFUseScrollbarOptions> {
    thumbHoverColor?: string;
    thumbHoverSize?: string | number;
    showOnHover?: boolean;
    visibleOpacity?: number;
}
declare const FullScrollbar: React.ForwardRefExoticComponent<IFullScrollbarProps & React.RefAttributes<IFScrollbarHandle>>;
export default FullScrollbar;
