import clsx from 'clsx';
import { throttle } from 'lodash-es';
import type { MutableRefObject } from 'react';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';

interface ThumbProps {
    type: 'horizontal' | 'vertical';
    autoExpand: boolean;
    autoHide: boolean;
    autoHideDelay: number;
    fixed: boolean;
    scrollInfo: ScrollInfo;
    scrollInfoRef: MutableRefObject<ScrollInfo>;
    wrapperEl: MutableRefObject<HTMLDivElement>;
}

interface ScrollInfo {
    thumbSize: number;
    contentMainSize: number;
    wrapperMainSize: number;
    boundaryDistance: number;
}

export interface ThumbMethods {
    autoHideAfterScroll(): void;
}

const Thumb = forwardRef<ThumbMethods, ThumbProps>(({ wrapperEl, scrollInfoRef, ...props }, ref) => {
    /** <--------------- mouse drag handler ---------------> */
    const thumbEl = useRef<HTMLDivElement>(null!);
    const pointerDownInfo = useRef({ pageX: 0, pageY: 0, scrollPos: 0 });
    const pointerId = useRef<number | null>(null);
    const autoHideTimer = useRef<number | null>(null);

    const startAutoHideTimer = useCallback(() => {
        autoHideTimer.current = setTimeout(() => {
            if (thumbEl.current) thumbEl.current.classList.remove('scrollbar__thumbPlaceholder--scrolling')
            autoHideTimer.current = null;
        }, props.autoHideDelay);
    }, [props.autoHideDelay]);

    const clearAutoHideTimer = useCallback(() => {
        if (autoHideTimer.current !== null) clearTimeout(autoHideTimer.current);
    }, []);
    useEffect(() => clearAutoHideTimer, []);

    const handlePointerMove = useCallback(throttle((evt: PointerEvent) => {
        evt.stopPropagation();
        evt.preventDefault();
        const moveDirection = props.type === 'horizontal' ? 'pageX' : 'pageY';
        const moveDistance = (evt[moveDirection] - pointerDownInfo.current[moveDirection]) / scrollInfoRef.current.wrapperMainSize * scrollInfoRef.current.contentMainSize;
        wrapperEl.current.scrollTo({ [props.type === 'horizontal' ? 'left' : 'top']: pointerDownInfo.current.scrollPos + moveDistance, behavior: 'auto' });
    }, 16), []);
    
    const handlePointerEnd = useCallback(() => {
        startAutoHideTimer();
        
        thumbEl.current.removeEventListener('pointermove', handlePointerMove);
        thumbEl.current.removeEventListener('pointerup', handlePointerEnd);
        thumbEl.current.removeEventListener('pointercancel', handlePointerEnd);
        thumbEl.current.removeEventListener('mousewheel', handlePointerEnd);
        document.removeEventListener('mousewheel', handlePointerEnd);
        if (typeof pointerId.current === 'number') thumbEl.current.releasePointerCapture(pointerId.current);
        pointerId.current = null;
    }, [props.autoHideDelay, startAutoHideTimer]);
    
    const handlePointerDown = useCallback<React.PointerEventHandler>((evt) => {
        evt.stopPropagation();
        if (evt.ctrlKey || evt.button !== 0) return;
        clearAutoHideTimer();

        pointerDownInfo.current.pageX = evt.pageX;
        pointerDownInfo.current.pageY = evt.pageY;
        pointerDownInfo.current.scrollPos = wrapperEl.current[props.type === 'horizontal' ? 'scrollLeft' : 'scrollTop'];
    
        pointerId.current = evt?.pointerId;
        thumbEl.current.setPointerCapture(pointerId.current);
    
        thumbEl.current.addEventListener('pointermove', handlePointerMove);
        thumbEl.current.addEventListener('pointerup', handlePointerEnd);
        thumbEl.current.addEventListener('pointercancel', handlePointerEnd);
        thumbEl.current.addEventListener('mousewheel', handlePointerEnd, { passive: false });
        document.addEventListener('mousewheel', handlePointerEnd, { passive: false });
        thumbEl.current.classList.add('scrollbar__thumbPlaceholder--scrolling');
    }, []);
    
    
    

    /** <--------------- fixed Thumb ---------------> */
    const [isWrapperIntersecting, setWrapperIntersecting] = useState(false);
    const [isShepherdIntersecting, setShepherdIntersecting] = useState(false);
    const shepherdEl = useRef<HTMLDivElement>(null!);
    const shouldFixed = useMemo(() => props.fixed && !isShepherdIntersecting, [props.fixed, isShepherdIntersecting]);

    useEffect(() => {
        if (!props.fixed) return;
        let shepherdIO: IntersectionObserver | null = null;
        let wrapperIO: IntersectionObserver | null = null;
        const shepherdIOCallback: IntersectionObserverCallback = ([entry]) => setShepherdIntersecting(entry.isIntersecting);
        const wrapperIOCallback: IntersectionObserverCallback = ([entry]) => setWrapperIntersecting(entry.isIntersecting);
        
        wrapperIO = new IntersectionObserver(wrapperIOCallback, { threshold: [0, 0.5] });
        wrapperIO.observe(wrapperEl.current);
        shepherdIO = new IntersectionObserver(shepherdIOCallback);
        shepherdIO.observe(shepherdEl.current);
        return () => {
            if (autoHideTimer.current !== null) clearTimeout(autoHideTimer.current);
            if (shepherdIO) {
                shepherdIO.disconnect();
                shepherdIO = null;
            }
            if (wrapperIO) {
                wrapperIO.disconnect();
                wrapperIO = null;
            }
        }
    }, [props.fixed]);



    /** <--------------- expose autoHideAfterScroll ---------------> */
    const autoHideAfterScroll = useCallback(() => {
        clearAutoHideTimer();
        if (thumbEl.current) thumbEl.current.classList.add('scrollbar__thumbPlaceholder--scrolling');
        startAutoHideTimer();
    }, [props.autoHideDelay, startAutoHideTimer]);

    useImperativeHandle(ref, () => ({ autoHideAfterScroll }));
    
    return (
        <>
            <div
                className={clsx(
                    'scrollbar__thumbPlaceholder',
                    `scrollbar__thumbPlaceholder--${props.type}`,
                    {
                        ['scrollbar__thumbPlaceholder--visible']: Boolean(props.scrollInfo.thumbSize) && (props.fixed ? isWrapperIntersecting : true),
                        ['scrollbar__thumbPlaceholder--autoHide']: props.autoHide,
                        ['scrollbar__thumbPlaceholder--autoExpand']: props.autoExpand,
                    }
                )}
                style={{
                    width: props.type === 'horizontal' ? `${props.scrollInfo.thumbSize}px`: '',
                    height: props.type === 'vertical' ? `${props.scrollInfo.thumbSize}px` : '',
                    position: !shouldFixed ? 'absolute' : 'fixed',
                    [props.type === 'vertical' ? 'top' : 'left']: !shouldFixed ? '3px' : `${props.scrollInfo.boundaryDistance + 3}px`
                }}
                ref={thumbEl}
                onPointerDown={handlePointerDown}
            >
                <div className={clsx('scrollbar__thumb', `scrollbar__thumb--${props.type}`)} />
            </div>
            {props.fixed &&
                <div
                    ref={shepherdEl}
                    className={clsx(
                        'scrollbar__shepherd', 
                        `scrollbar__shepherd--${props.type}`,
                        Boolean(props.scrollInfo.thumbSize) && 'scrollbar__shepherd--visible'
                    )}
                />
            }
        </>
    );
});

export default Thumb;