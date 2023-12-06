import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import sl from './locales/sl.json';

function loadLocaleMessages(): any {
    const locales: { [key: string]: object }[] = [{ en: en }, { sl: sl }];
    const messages: any = {};
    locales.forEach(lang => {
        const key = Object.keys(lang)[0];
        messages[key] = lang[key];
    });
    return messages;
}

export default createI18n({
    locale: 'sl',
    fallbackLocale: 'en',
    messages: loadLocaleMessages() // invoke the function to get the messages
});
