import React, { memo } from 'react';
import CustomScrollbar from '../../src';
import { useI18n } from '../App';
import Box from '../Box';
import './ThumbSize&Style.scss';

const transitions = {
    en: {
        title: 'Thumb Style',
        desc: `
            Override the scrollbar style by css, please see the sample code for details.
            (Note: In order to support the hover effect, the scrollbar is divided into inner and outer containers, and the inner container is 2/3 of the width of the outer container.)
        `
    },
    zh: {
        title: '滚动条样式',
        desc: '通过css覆写滚动条样式，具体怎么写请看样例代码。（注意: 为了支持hover变大效果，滚动条分内外容器，内部容器宽度为外部容器2/3。）'
    },
} as const;

const AutoExpand = () => {
    const i18n = useI18n(transitions);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc="https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/ThumbStyle.tsx"
            className="customCls"
        >
            <CustomScrollbar style={{ height: '40vh' }} autoHide={false}>
                {Array.from({ length: 64 }).map((_, index) => (
                    <p key={index} style={{ width: '100vw', maxWidth: '1400px' }}>
                        Hover to show thumb...
                    </p>
                ))}
            </CustomScrollbar>
        </Box>
    );
};

export default memo(AutoExpand);
