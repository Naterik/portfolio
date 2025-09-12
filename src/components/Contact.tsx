import {  Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className='py-4'>
      <h1 className='text-3xl text-center mx-auto mb-3'>{t('contact_title')}</h1>
      <p className='text-center mx-auto tracking-wider mb-5'>
        {t('contact_lead')}<br/>{t('contact_sublead')}
      </p>
  
      <div className='grid grid-cols-3 justify-items-center '>
        <div className='text-center'>
          <Mail className='size-7 mx-auto'/>
          <p className='text-lg'>{t('contact_email_label')}</p>
          <button onClick={(e) => {window.location.href ='mailto:khuong190703@gmail.com'}}>khuong190703@gmail.com</button>
        </div>

        <div className='text-center'>
          <Phone className='size-7 mx-auto'/>
          <p className='text-lg'>{t('contact_phone_label')}</p>
          <a href="tel:0968403782">+84 379627003</a>
        </div>

        <div className='text-center' >
          <MapPin  className='size-7 mx-auto'/>
          <p className='text-lg'>{t('contact_location_label')}</p>
          <a href="https://maps.app.goo.gl/P1dxGgrbiog77rqe7">{t('contact_location_value')}</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
