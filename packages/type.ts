import type {ElTooltipProps} from "element-plus"
import {SlotsType} from "@vue/runtime-core";

type toolTipProps = Partial<Pick<ElTooltipProps, 'effect' | 'enterable' | 'hideAfter' | 'offset' | 'placement' | 'popperClass' | 'popperOptions' | 'showAfter' | 'showArrow'>>

/**
 * @name XTextToolTipSlots
 * @description Slots for XTextToolTip component
 */
export interface XTextToolTipSlots {
    /**
     * The default slot for main content
     */
    default?: SlotsType;

    /**
     * The slot for tooltip content
     */
    content?: SlotsType;
}

export type {toolTipProps}