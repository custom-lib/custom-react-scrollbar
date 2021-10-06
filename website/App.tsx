import React, { createContext, useCallback, useContext, useState } from 'react';
import CustomScrollbar from '../src';
import AutoExpand from './examples/AutoExpand';
import AutoHeight from './examples/AutoHeight';
import AutoHide from './examples/AutoHide';
import AutoHideDelay from './examples/AutoHideDelay';
import BasicUsage from './examples/BasicUsage';
import FixedThumb from './examples/FixedThumb';
import Horizontal from './examples/Horizontal';
import Other from './examples/Other';
import ThumbSize from './examples/ThumbSize';
import ThumbStyle from './examples/ThumbStyle';

const LocaleContext = createContext<{ locale: 'en' | 'zh'; setLocal: React.Dispatch<React.SetStateAction<"en" | "zh">> }>(null!);

function App() {
    const [locale, setLocal] = useState<'zh' | 'en'>(() => navigator.language.includes('zh') ? 'zh' : 'en');
    const handleChangeLanguage = useCallback(() => setLocal(preLocale => preLocale === 'zh' ? 'en' : 'zh'), []);

    return (
        <LocaleContext.Provider value={{ locale, setLocal }}>
            <CustomScrollbar className="page-scroller">
                <h1 className="page_title">
                    CustomScrollbar (React)
                    <div className="language_btn" onClick={handleChangeLanguage}>{locale === 'en' ? '简体中文' : 'English'}</div>
                </h1>
                <div className="box_container">
                    <BasicUsage />
                    <Horizontal />
                    <ThumbStyle />
                    <AutoHide />
                    <AutoHideDelay />
                    <AutoExpand />
                    <AutoHeight />
                    <ThumbSize />
                    <FixedThumb />
                    <Other />
                </div>
            </CustomScrollbar>
        </LocaleContext.Provider>
    );
}


export const useI18n = <T extends Record<'en' | 'zh', Record<string, string>>>(transitions: T) => {
    const { locale } = useContext(LocaleContext);
    return transitions[locale];
}

export default App;
