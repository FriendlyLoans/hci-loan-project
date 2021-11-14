import React from 'react'
import { i18n } from '@lingui/core'
import { Text, useTheme } from '@chakra-ui/react'
import { useLingui } from '@lingui/react'
import { LanguageIcon } from './LanguageIcon'
import { getActionTrackerLink } from './getActionTrackerLink'

const locales = {
  en: 'English',
  fr: 'Français',
}

i18n.loadLocaleData('en', { plurals: 'en' })
i18n.loadLocaleData('fr', { plurals: 'fr' })

const dynamicActivate = async (locale) => {
  const { messages } = await import(`./locales/${locale}/messages`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}

export const LocaleSwitcher = ({ ...props }) => {
  const { i18n } = useLingui()
  const theme = useTheme()

  const localeSwitcherText = i18n.locale === 'en' ? locales.fr : locales.en

  return (
    <Text
      {...props}
      color="themeYellow"
      as="button"
      fontWeight="bold"
      onClick={async () => {
        fetch(getActionTrackerLink('Language switcher'), { mode: 'no-cors' })
        await dynamicActivate(i18n.locale === 'en' ? 'fr' : 'en')
      }}
      border="1px solid transparent"
      borderRadius="md"
      padding="0.25rem"
      _hover={{
        border: `1px solid ${theme.colors.themeYellow}`,
        transition: '0.25s',
      }}
    >
      {localeSwitcherText} <LanguageIcon />
    </Text>
  )
}
