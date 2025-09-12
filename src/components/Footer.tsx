import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='text-center mt-5'>{t('footer_text')}</div>
  )
}

export default Footer
