import React, { memo } from 'react';
import CustomScrollbar from '../../src';
import { useI18n } from '../App';
import Box from '../Box';

const transitions = {
    en: {
        title: 'Horizontal',
        desc: `
            If you need to change the content container to horizontal layout,
            you can set the component property 'direction' to 'horizontal' to change the layout to 'display': 'flex' & 'flex-direction': 'row'.
            Or set it manually via 'contentClass' / 'contentStyle' properties.
            However, it is not recommended to set it manually, as the 'direction' property is related to the 'fixedThumb' property below.
        `
    },
    zh: {
        title: '横向排列',
        desc: `
            内容容器默认block布局，如果需要改成横向排列，可以通过设置组件属性 'direction' 为 'horizontal' 来使其布局变为 'display': 'flex' & 'flex-direction': 'row'。
            或者通过 'contentClass' / 'contentStyle' 属性来手动设置。但是不建议手动设置，因为 'direction' 属性 与下文 'fixedThumb' 属性 有关。
        `
    },
} as const;

const AutoExpand = () => {
    const i18n = useI18n(transitions);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc="https://github.com/custom-lib/custom-vue-scrollbar/blob/main/website/examples/Horizontal.vue"
        >
            <CustomScrollbar style={{ width: '100%', padding: '12px' }} direction="horizontal">
                {Array.from({ length: 48 }).map((_, index) => (
                    <p key={index} style={{ whiteSpace: 'nowrap' }}>
                        Hover to show thumb...
                    </p>
                ))}
            </CustomScrollbar>
        </Box>
    );
};

export default memo(AutoExpand);
