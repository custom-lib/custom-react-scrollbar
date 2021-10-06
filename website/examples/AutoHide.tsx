import React, { memo } from 'react';
import CustomScrollbar from '../../src';
import { useI18n } from '../App';
import Box from '../Box';

const transitions = {
    en: {
        title: 'Auto Hide',
        desc: `The 'autoHide' property is on by default and can be explicitly set to 'false' to always display the scrollbar.`
    },
    zh: {
        title: '自动隐藏',
        desc: `'autoHide' 属性默认开启，可以显式设置其为 false 永久显示滚动条。`
    },
} as const;

const AutoExpand = () => {
    const i18n = useI18n(transitions);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc="https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/AutoHide.tsx"
        >
            <CustomScrollbar style={{ height: '40vh' }} autoHide={false}>
                {Array.from({ length: 48 }).map((_, index) => (
                    <p key={index}>Hover to show thumb...</p>
                ))}
            </CustomScrollbar>
        </Box>
    );
};

export default memo(AutoExpand);
