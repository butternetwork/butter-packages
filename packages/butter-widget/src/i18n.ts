"use client";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 引入语言文件
import enTranslation from "./assets/locales/en/common.json";
import esTranslation from "./assets/locales/es/common.json";
import frTranslation from "./assets/locales/fr/common.json";
import jaTranslation from "./assets/locales/ja/common.json";
import krTranslation from "./assets/locales/kr/common.json";
import ptTranslation from "./assets/locales/pt/common.json";
import ruTranslation from "./assets/locales/ru/common.json";
import zhTranslation from "./assets/locales/zh/common.json";
import trTranslation from "./assets/locales/tr/common.json";
import viTranslation from "./assets/locales/vi/common.json";
import zhTwTranslation from "./assets/locales/zh-Tw/common.json";

const resources = {
    en: {
        translation: enTranslation,
    },
    zh: {
        translation: zhTranslation,
    },
    es: {
        translation: esTranslation,
    },
    fr: {
        translation: frTranslation,
    },
    ja: {
        translation: jaTranslation,
    },
    kr: {
        translation: krTranslation,
    },
    pt: {
        translation: ptTranslation,
    },
    ru: {
        translation: ruTranslation,
    },
    tr: {
        translation: trTranslation,
    },
    vi: {
        translation: viTranslation,
    },
    "zh-Tw": {
        translation: zhTwTranslation,
    },
};


i18n
    .use(initReactI18next) // 将 i18next 传递给 react-i18next
    .init({
        resources,
        lng: 'en', // 默认语言
        fallbackLng: 'en', // 备用语言
        interpolation: {
            escapeValue: false, // 防止 XSS 攻击（React 已经有防护）
        },
    });

export default i18n;
