import React from 'react'
import { i18n } from '@lingui/core'
import { Button, Text } from '@chakra-ui/react'
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

  const localeSwitcherText = i18n.locale === 'en' ? locales.fr : locales.en

  console.log(props)

  return (
    <Text
      {...props}
      color="yellow"
      as="button"
      fontWeight="bold"
      my="1rem"
      onClick={async () => {
        await dynamicActivate(i18n.locale === 'en' ? 'fr' : 'en')
      }}
      border="1px solid transparent"
      borderRadius="md"
      padding="0.25rem"
      _hover={{
        border: '1px solid yellow',
      }}
    >
      {localeSwitcherText} <LanguageIcon />
    </Text>
  )
}
