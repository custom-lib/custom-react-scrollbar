import React, { memo } from 'react';
import CustomScrollbar from '../../src';
import { useI18n } from '../App';
import Box from '../Box';

const transitions = {
    en: {
        title: 'Auto Expand',
        desc: `The 'autoExpand' property is on by default, and can be explicitly set to 'false' to disable the near-growth scrollbar feature.`
    },
    zh: {
        title: '靠近变大',
        desc: `'autoExpand' 属性 默认开启，可以显式设置其为 false 禁用靠近变大滚动条功能。`
    },
} as const;

const AutoExpand = () => {
    const i18n = useI18n(transitions);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc="https://github.com/custom-lib/custom-vue-scrollbar/blob/main/website/examples/AutoExpand.vue"
        >
            <CustomScrollbar style={{ height: '40vh' }} autoExpand={false}>
                {Array.from({ length: 30 }).map((_, index) => (
                    <p key={index}>Hover to show thumb...</p>
                ))}
            </CustomScrollbar>
        </Box>
    );
};

export default memo(AutoExpand);
