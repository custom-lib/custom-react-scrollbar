import clsx from 'clsx';
import { clamp } from 'lodash-es';
import React, { useCallback, useEffect, useMemo, useRef, useState, forwardRef, PropsWithChildren } from 'react';
import './index.scss';
import type { ThumbMethods } from './Thumb';
import Thumb from './Thumb';
import type { Rect } from './useMeasure';
import useMeasure from './useMeasure';
import composeRef from './composeRef';

export type { Rect } from './useMeasure';
export { useMeasure };

interface Props extends React.ComponentProps<'div'> {
    wrapperClassName?: string;
    wrapperStyle?: React.CSSProperties;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    /** Set major scroll direction.Will auto set the scroll container element display to 'horizontal' -> 'inline-flex' / 'vertical' -> 'block'('inline-block' if fixedThumb). */
    direction?: 'horizontal' | 'vertical';
    thumbMinSize?: number;
    thumbMaxSize?: number;
    autoHide?: boolean;
    autoHideDelay?: number;
    autoExpand?: boolean;
    /** In fixedThumb mode, minor direction thumb will be fixed at edge of screen if scroller element out of window. */
    fixedThumb?: boolean;
    throttleType?: 'throttle' | 'debounce' | 'none';
    throttleWait?: number;
    simulateScroll?: boolean;
    onWrapperResize?: (rect: Rect) => void;
    onContentResize?: (rect: Rect) => void;
}

const CustomScrollbar = forwardRef<HTMLDivElement, PropsWithChildren<Props>>
    (({
        children,
        className,
        wrapperClassName,
        wrapperStyle,
        contentClassName,
        contentStyle,
        direction = 'vertical',
        autoHide = true,
        autoHideDelay = 900,
        autoExpand = true,
        throttleType = 'debounce',
        throttleWait = 333,
        fixedThumb,
        thumbMinSize = 48,
        thumbMaxSize = Infinity,
        simulateScroll,
        onWrapperResize,
        onContentResize,
        onScroll,
        ...nativeProps
    }, _forwardRef) => {
        /** Batch render Thumbs.Get the Thumb element and then set transform, autoHide onScroll. */
        const thumbs = useRef<Record<'horizontal' | 'vertical', { el: HTMLElement; methods: ThumbMethods }>>({
            horizontal: { el: null as unknown as HTMLElement, methods: null as unknown as ThumbMethods },
            vertical: { el: null as unknown as HTMLElement, methods: null as unknown as ThumbMethods },
        });
        useEffect(() => {
            const childNodes = Array.from(wrapperEl.current.parentElement?.childNodes!);
            for (const thumbType in thumbs.current) {
                thumbs.current[thumbType as keyof typeof thumbs.current].el = childNodes.find(ele => (ele as HTMLElement)?.classList?.contains(`scrollbar__thumbPlaceholder--${thumbType}`)) as HTMLElement;
            }
        }, []);

        /** Measure the rect of wrapperEl and container el reactively, computed size of thumb. */
        const [nativeMaxScrollTop, setNativeMaxScrollTop] = useState(0);
        const [nativeMaxScrollLeft, setNativeMaxScrollLeft] = useState(0);
        const wrapperEl = useRef<HTMLDivElement>(null!);
        const updateMaxScrollDistance = useCallback(() => {
            // Recalculate native scrollable distance should happen at both wrapperEl and contentEl rect change.
            let newMaxScrollTop = Math.max((wrapperEl.current.scrollHeight - wrapperEl.current.clientHeight) | 0, 0);
            let newMaxScrollLeft = Math.max((wrapperEl.current.scrollWidth - wrapperEl.current.clientWidth) | 0, 0);
            setNativeMaxScrollTop(newMaxScrollTop);
            setNativeMaxScrollLeft(newMaxScrollLeft);
        }, []);

        const wrapperRect = useMeasure(wrapperEl, { wait: throttleWait, type: throttleType, callback: updateMaxScrollDistance });
        const [contentEl, contentRect] = useMeasure({ wait: throttleWait, type: throttleType, callback: updateMaxScrollDistance });
        useEffect(() => onWrapperResize?.(wrapperRect), [wrapperRect]);
        useEffect(() => onContentResize?.(contentRect), [contentRect]);

        // use Ref info for Thumb's drag handler memo.
        const scrollWidthInfoRef = useRef({ thumbSize: 0, contentMainSize: 0, wrapperMainSize: 0, boundaryDistance: 0 });
        const scrollWidthInfo = useMemo(() => {
            const res = {
                thumbSize: nativeMaxScrollLeft
                    ? clamp(
                        (wrapperRect.width / wrapperEl.current.scrollWidth) * wrapperRect.width,
                        thumbMinSize > wrapperRect.width ? 48 : thumbMinSize,
                        thumbMaxSize,
                    )
                    : 0,
                /** used in mouse drag handler */
                contentMainSize: contentRect.width,
                wrapperMainSize: wrapperRect.width,
                /** for fixedThumb position */
                boundaryDistance: wrapperRect.left,
            };
            Object.assign(scrollWidthInfoRef.current, res);
            return res;
        }, [nativeMaxScrollLeft, wrapperRect.width, thumbMinSize, thumbMaxSize, contentRect.width, wrapperRect.left]);
        const scrollHeightInfoRef = useRef({ thumbSize: 0, contentMainSize: 0, wrapperMainSize: 0, boundaryDistance: 0 });
        const scrollHeightInfo = useMemo(() => {
            const res = {
                thumbSize: nativeMaxScrollTop
                    ? clamp(
                        (wrapperRect.height / wrapperEl.current.scrollHeight) * wrapperRect.height,
                        thumbMinSize > wrapperRect.height ? 48 : thumbMinSize,
                        thumbMaxSize,
                    )
                    : 0,
                contentMainSize: contentRect.height,
                wrapperMainSize: wrapperRect.height,
                boundaryDistance: wrapperRect.top,
            };
            Object.assign(scrollHeightInfoRef.current, res);
            return res;
        }, [nativeMaxScrollTop, wrapperRect.height, thumbMinSize, thumbMaxSize, contentRect.height, wrapperRect.top]);

        // Scrollable distance of simulate custom scrollbar's thumb.
        const maxScrollInfo = useRef({ native: { top: 0, left: 0 }, custom: { top: 0, left: 0 } });
        useEffect(() => {
            maxScrollInfo.current.custom.left = wrapperRect.width - scrollWidthInfo.thumbSize - 5; // thumb has 3px's margin to wrapper;
        }, [wrapperRect.width, scrollWidthInfo.thumbSize]);
        useEffect(() => {
            maxScrollInfo.current.custom.top = wrapperRect.height - scrollHeightInfo.thumbSize - 5;
        }, [wrapperRect.height, scrollHeightInfo.thumbSize]);
        useEffect(() => {
            maxScrollInfo.current.native.left = nativeMaxScrollLeft;
        }, [nativeMaxScrollLeft]);
        useEffect(() => {
            maxScrollInfo.current.native.top = nativeMaxScrollTop;
        }, [nativeMaxScrollTop]);

        const handleScroll = useCallback<React.UIEventHandler<HTMLDivElement>>((evt) => {
            if (maxScrollInfo.current.native.left) {
                thumbs.current.horizontal.el.style.transform = `translate3d(${
                    (wrapperEl.current.scrollLeft / maxScrollInfo.current.native.left) * maxScrollInfo.current.custom.left
                }px, 0, 0)`;
                thumbs.current.horizontal.methods.autoHideAfterScroll();
            }
            if (maxScrollInfo.current.native.top) {
                thumbs.current.vertical.el.style.transform = `translate3d(0, ${
                    (wrapperEl.current.scrollTop / maxScrollInfo.current.native.top) * maxScrollInfo.current.custom.top
                }px, 0)`;
                thumbs.current.vertical.methods.autoHideAfterScroll();
            }
            if (evt) onScroll?.(evt);
        }, []);
        useEffect(() => {
            // should recalculate thumb position when dynamic content size change.
            if (!thumbs.current.vertical.el) return;
            handleScroll(undefined as unknown as React.UIEvent<HTMLDivElement, UIEvent>);
        }, [nativeMaxScrollLeft, nativeMaxScrollTop]);

        const handleSimulateScroll = useCallback<React.WheelEventHandler<HTMLDivElement>>((evt) => {
            evt.stopPropagation();
            const preScrollLeft = wrapperEl.current.scrollLeft;
            const preScrollTop = wrapperEl.current.scrollTop;
            const newScrollLeft = clamp(preScrollLeft + (evt?.deltaX || 0), 0, nativeMaxScrollLeft) | 0;
            const newScrollTop = clamp(preScrollTop + (evt?.deltaY || 0), 0, nativeMaxScrollTop) | 0;
            wrapperEl.current.scrollLeft = newScrollLeft;
            wrapperEl.current.scrollTop = newScrollTop;
            if (nativeMaxScrollLeft) {
                thumbs.current.horizontal.el.style.transform = `translate3d(${
                    (newScrollLeft / maxScrollInfo.current.native.left) * maxScrollInfo.current.native.left
                }px, 0, 0)`;
                thumbs.current.horizontal.methods.autoHideAfterScroll();
            }
            if (nativeMaxScrollTop) {
                thumbs.current.vertical.el.style.transform = `translate3d(0, ${
                    (newScrollTop / maxScrollInfo.current.native.top) * maxScrollInfo.current.native.top
                }px, 0)`;
                thumbs.current.vertical.methods.autoHideAfterScroll();
            }
        }, []);

        return (
            <div className={clsx("scrollbar__wrapper", wrapperClassName)} style={wrapperStyle}>
                <div
                    ref={composeRef(wrapperEl, _forwardRef)}
                    {...nativeProps}
                    className={clsx('scrollbar__scroller', className)}
                    onScroll={simulateScroll ? undefined : handleScroll}
                    onWheel={simulateScroll ? handleSimulateScroll : undefined}
                >
                    <div
                        ref={contentEl}
                        className={clsx(
                            'scrollbar__content',
                            direction && `scrollbar__content--${direction}`,
                            contentClassName,
                            fixedThumb && 'scrollbar__content--fixedThumb',
                        )}
                        style={contentStyle}
                    >
                        {children}
                    </div>
                </div>
                {Object.entries(thumbs.current).map(([thumbType, thumb]) => (
                    <Thumb
                        ref={(methods) => (thumb.methods = methods!)}
                        key={thumbType}
                        type={thumbType as keyof typeof thumbs.current}
                        autoExpand={autoExpand}
                        autoHide={autoHide}
                        autoHideDelay={autoHideDelay}
                        fixed={thumbType === direction ? false : !!fixedThumb}
                        scrollInfo={thumbType === 'vertical' ? scrollHeightInfo : scrollWidthInfo}
                        scrollInfoRef={thumbType === 'vertical' ? scrollHeightInfoRef : scrollWidthInfoRef}
                        wrapperEl={wrapperEl}
                    />
                ))}
            </div>
        );
    }
);

export default CustomScrollbar;
