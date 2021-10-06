import React, { memo, useCallback, useState } from 'react';
import CustomScrollbar from '../../src';
import { useI18n } from '../App';
import Box from '../Box';
import './AutoHeight.scss';

const transitions = {
    en: {
        title: 'Auto Height',
        desc: `The 'max-height' style of the custom-scrollbar can be given to achieve the effect that the scrollbar reappears beyond a certain height.`,
    },
    zh: {
        title: '自适应高度',
        desc: `可以通过给定 custom-scrollbar 的 'max-height' style 来实现超出某个高度再出现滚动条的效果。`,
    },
} as const;


const AutoExpand = () => {
    const i18n = useI18n(transitions);
    const [paragraphCount, setParagraphCount] = useState(3);

    const Operation = useCallback(() => 
        <div className="operation">
            <div className="operation_btn" onClick={() => setParagraphCount(pre => pre + 1)}>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M942.6 383.8H640.1V81.3c0-44-36-80-80-80h-96.2c-44 0-80 36-80 80v302.5H81.4c-44 0-80 36-80 80V560c0 44 36 80 80 80h302.5v302.5c0 44 36 80 80 80h96.2c44 0 80-36 80-80V640.1h302.5c44 0 80-36 80-80v-96.2c0-44.1-36-80.1-80-80.1z" fill="#31456A"></path></svg>
            </div>
            <div className="operation_btn" onClick={() => setParagraphCount(pre => pre -= paragraphCount > 0 ? 1 : 0)}>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="31" height="31"><path d="M735.573333 354.901333a83.456 83.456 0 0 1 73.301334 77.44c7.808 132.010667-9.898667 264.32-53.248 396.842667a84.778667 84.778667 0 0 1-70.570667 57.685333 1262.037333 1262.037333 0 0 1-303.616-0.042666 84.778667 84.778667 0 0 1-70.4-57.429334c-43.690667-132.010667-61.141333-264.362667-53.162667-397.056 2.389333-40.106667 33.706667-72.661333 73.301334-77.44a1676.330667 1676.330667 0 0 1 404.352 0zM533.333333 128c58.88 0 107.861333 30.378667 116.522667 69.930667a1798.4 1798.4 0 0 1 134.186667 13.866666 31.317333 31.317333 0 0 1 26.624 31.061334v28.416a31.146667 31.146667 0 0 1-31.018667 31.232 1409.706667 1409.706667 0 0 0-492.629333 0A31.146667 31.146667 0 0 1 256 271.274667v-28.373334c0-15.530667 11.392-28.970667 26.709333-31.104a1803.093333 1803.093333 0 0 1 134.101334-13.866666C425.472 158.378667 474.453333 128 533.333333 128z m0 36.778667c-28.373333 0-52.608 12.714667-61.610666 30.421333a1746.346667 1746.346667 0 0 1 123.136-0.042667c-8.96-17.664-33.152-30.378667-61.525334-30.378666z" fill="#31456A"></path></svg>
            </div>
        </div>
    , []);

    return (
        <Box
            title={i18n.title}
            desc={i18n.desc}
            codeSrc="https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/AutoHeight.tsx"
            Operation={Operation}
        >
            <CustomScrollbar style={{ maxHeight: '40vh' }} autoHide={false} throttleType="none">
                {Array.from({ length: paragraphCount }).map((_, index) => (
                    <div key={index} style={{ height: '8vh', lineHeight: '8vh' }}>
                        { index }:
                        {
                            paragraphCount < 6
                            ? ` Add ${6 - paragraphCount} more paragraph to show scroller.`
                            : ` Delete ${paragraphCount - 5} more paragraph to hide scroller.`
                        }
                    </div>
                ))}
            </CustomScrollbar>
        </Box>
    );
};

export default memo(AutoExpand);
