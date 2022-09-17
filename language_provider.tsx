import {createI18n, languageDictionary} from "react-typed-i18n";


const ar = () => import("./constant/i18n/ar").then((x) => x.default);
const en = () => import("./constant/i18n/en").then((x) => x.default);

export const languages = languageDictionary({
    ar,
    en,
});

export const {Localized, Provider, id, prefix, useI18n} = createI18n(languages);