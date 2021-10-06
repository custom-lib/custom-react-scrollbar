import React, { memo } from 'react';
import CustomScrollbar from '../../src';
import { useI18n } from '../App';
import Box from '../Box';

const transitions = {
    en: {
        title: 'Fixed Thumb',
        desc: `
            The 'direction' property specifies the direction as the 'major axis direction'.
            When the 'fixedThumb' property is turned on, if the secondary axis has a scrollbar and the major axis has a scroll container that is partially off-screen.
            The scrollbars of the secondary axis will float to the edge of the screen.
        `
    },
    zh: {
        title: '基础用法',
        desc: `'direction' 属性 指定的方向为 '主轴方向'。开启 'fixedThumb' 属性 后，如果辅轴有滚动条，并且主轴方向有部分滚动容器位于屏幕外。辅轴的滚动条将会浮动至屏幕边缘。`
    },
} as const;

const AutoExpand = () => {
    const i18n = useI18n(transitions);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc="https://github.com/custom-lib/custom-vue-scrollbar/blob/main/website/examples/FixedThumb.vue"
        >
            <CustomScrollbar fixedThumb autoHide={false} throttleType="none">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} style={{ width: '100vw', maxWidth: '1400px', height: '8vh', lineHeight: '8vh' }}>
                        horizontal thumb is fixed in screen bottom now...
                    </div>
                ))}
            </CustomScrollbar>
        </Box>
    );
};

export default memo(AutoExpand);
