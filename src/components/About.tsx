import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full flex justify-between py-4 border-b-1 '>
      <div className='tracking-wide'>
        <h1 className='uppercase text-3xl font-bold leading-10 '>
          {t('intro_let_me')} <span className='text-primary'>{t('intro_introduce')}</span> {t('intro_myself')}
        </h1>

        <p>{t('intro_p1')}</p>

        <p>
          {t('intro_p2_before')} <span className='text-primary font-about font-bold'>ReactJS, TailwindCSS</span>;
          <br />
          {t('intro_p2_after')} <span className='text-primary font-about font-bold'>NodeJs/Express</span>
        </p>

        <p>{t('intro_p3')}</p>

        <p>
          {t('intro_p4_prefix')} <span className='text-primary font-about font-bold'>internship-ready</span>, {t('intro_p4_suffix')}
        </p>
      </div>

      <div className='flex'>
        <img src='/225137335-fat-thick-cheerful-bear-toy-bear-very-round-animal-adorable-3d-illustration-on-white-unusual.jpg' className='size-50 object-cover rounded-full'/>
        <div className='flex flex-col justify-center '>
          <div className='bg-indigo-700 p-3 rotate-90 my-7 uppercase font-medium rounded-lg'>{t('about_me')}</div>
          <div className='w-full flex justify-center'><div className='bg-indigo-700 w-0.5 h-20 mb-3'></div></div>
        </div>
      </div>
    </div>
  )
}

export default About
