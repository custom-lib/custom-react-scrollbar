import React, { memo, useCallback, useState } from 'react';
import CustomScrollbar from '../../src';
import { useI18n } from '../App';
import Box from '../Box';

const transitions = {
    en: {
        title: 'Thumb Min/Max Size',
        desc: `
            The upper and lower limits of the scrollbar size can be specified by 'thumbMinSize' (default 48) / 'thumbMaxSize' (default Infinity).
            A lower limit larger than the container size will be specified as 48, and an upper limit smaller than the container size will be specified as Infinity.
        `
    },
    zh: {
        title: '滚动条最小/最大尺寸',
        desc: `可以通过 'thumbMinSize'(默认 48) / 'thumbMaxSize'(默认 Infinity) 指定滚动条尺寸的上下限。下限大于容器尺寸将会被指定为48，上限小于容器尺寸将会被指定为Infinity。`
    },
} as const;

const AutoExpand = () => {
    const i18n = useI18n(transitions);

    const [thumbMinSize, setThumbMinSize] = useState(160);

    const Operation = useCallback(() => 
        <div className="operation">
            <span style={{ marginRight: '8px' }}>thumbMinSize:</span>
            <input
                className="operation_input"
                type="number"
                defaultValue={thumbMinSize}
                onChange={e => setThumbMinSize(+e.target.value)}
            />
            (px)
        </div>
    , []);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc="https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/ThumbSize.tsx"
            Operation={Operation}
        >
            <CustomScrollbar
                style={{ height: '40vh' }}
                autoHide={false}
                throttleType="none"
                thumbMinSize={thumbMinSize}
            >
                <p>Start</p>
                {Array.from({ length: 120 }).map((_, index) => (
                    <p key={index}>Hover to show thumb...</p>
                ))}
                <p>End</p>
            </CustomScrollbar>
        </Box>
    );
};

export default memo(AutoExpand);
