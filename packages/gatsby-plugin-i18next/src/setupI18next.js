import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

function setupI18next({
  debug = false,
  defaultNS = 'messages',
  fallbackLng,
  ...otherOptions
}) {
  const initOptions = Object.assign(
    {
      debug,
      defaultNS,
      fallbackLng,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    },
    otherOptions
  )

  i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init(initOptions)

  return i18n
}

export default setupI18next
