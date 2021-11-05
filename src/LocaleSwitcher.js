import React from 'react'
import { i18n } from '@lingui/core'
import { Text, useTheme } from '@chakra-ui/react'
import { useLingui } from '@lingui/react'
import { LanguageIcon } from './LanguageIcon'

const locales = {
  en: 'English',
  fr: 'Français',
}

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
        await dynamicActivate(i18n.locale === 'en' ? 'fr' : 'en')
      }}
      border="1px solid transparent"
      borderRadius="md"
      padding="0.25rem"
      _hover={{
        border: `1px solid ${theme.colors.themeYellow}`,
      }}
    >
      {localeSwitcherText} <LanguageIcon />
    </Text>
  )
}
