import React, { memo, useCallback, useRef } from 'react';
import CustomScrollbar from '../../src';
import { useI18n } from '../App';
import Box from '../Box';

const transitions = {
    en: {
        title: 'Basic Usage',
        desc: 'You can use custom-scrollbar like a native scroll container that has declared overflow: scroll, and then give a size for it. When the content size exceeds its size, scroll bars will appear.',
        scrollToTop: 'Scroll To Top'
    },
    zh: {
        title: '基础用法',
        desc: '像使用已经申明了overflow: scroll的原生滚动容器一样使用，给它设置一个固定的尺寸即可。当内容尺寸超出指定的尺寸，滚动条就会出现。',
        scrollToTop: '点击滚动到顶部'
    },
} as const;

const AutoExpand = () => {
    const i18n = useI18n(transitions);

    const scrollEl = useRef<HTMLDivElement>(null!);
    const handleClickScrollToTop = useCallback(() => scrollEl.current.scrollTo({ top: 0, behavior: 'smooth' }), []);

    const Operation = useCallback(() => 
        <div className="operation">
            <div className="operation_btn" onClick={handleClickScrollToTop} style={{ width: 'fit-content', padding: '0 16px' }}>
                { i18n.scrollToTop }
            </div>
        </div>
    , [i18n]);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc="https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/BasicUsage.tsx"
            Operation={Operation}
        >
            <CustomScrollbar style={{ height: '40vh' }} ref={scrollEl}>
                {Array.from({ length: 48 }).map((_, index) => (
                    <p key={index}>Hover to show thumb...</p>
                ))}
            </CustomScrollbar>
        </Box>
    );
};

export default memo(AutoExpand);
