import React, { memo } from 'react';
import { useI18n } from '../App';
import Box from '../Box';

const transitions = {
    en: {
        title: 'Other',
        desc: 'The rest of the properties (throttleType, throttleWait, simulateScroll) and Emit (wrapperResize, contentResize) are available in README.',
        codeSrc: 'https://github.com/custom-lib/custom-vue-scrollbar',
    },
    zh: {
        title: '其他',
        desc: '其余属性（throttleType、throttleWait、simulateScroll）以及Emit（wrapperResize、contentResize）请看README。',
        codeSrc: 'https://github.com/custom-lib/custom-vue-scrollbar/blob/main/README-zh_CN.md',
    },
} as const;

const AutoExpand = () => {
    const i18n = useI18n(transitions);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc={i18n.codeSrc}
        />
    );
};

export default memo(AutoExpand);
