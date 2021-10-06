import React, { memo } from 'react';
import CustomScrollbar from '../../src';
import { useI18n } from '../App';
import Box from '../Box';

const transitions = {
    en: {
        title: 'Auto Hide Delay',
        desc: `The 'autoHideDelay' property can be set to automatically hide the scrollbar after the scroll is triggered n(ms), default 900, in the example below it is 2000.`
    },
    zh: {
        title: '自动隐藏延时',
        desc: `'autoHideDelay' 属性 可以设置触发滚动n(ms)后再自动隐藏滚动条，默认900，下例中是2000。`
    },
} as const;

const AutoExpand = () => {
    const i18n = useI18n(transitions);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc="https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/AutoHideDelay.tsx"
        >
            <CustomScrollbar style={{ height: '40vh' }} autoHideDelay={2000}>
                {Array.from({ length: 48 }).map((_, index) => (
                    <p key={index}>Hover to show thumb...</p>
                ))}
            </CustomScrollbar>
        </Box>
    );
};

export default memo(AutoExpand);
