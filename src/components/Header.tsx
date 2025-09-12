import React, { useState } from "react";
import { Moon,Globe, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
interface ITheme{
  isDark:boolean,
  setIsDark:any
}
const Header = ({isDark,setIsDark}:ITheme) => {
  const { t ,i18n} = useTranslation();
  const [isClick ,setIsClick]=useState(false);
  const handleChangeLanguages=(language:any)=>{
      i18n.changeLanguage(language)
      setIsClick(!isClick)
  }

  return (
    <>
      <div className="flex space-x-3 my-4 items-center">
        <a href="/" className=" text-2xl font-semibold  text-primary">
         Khuong
        </a>
        <div>
          <ul className=" flex gap-4 items-center">
            <li>
              <a href="" className="hover:text-white-50">
                 {t('about')}
              </a>
            </li>
            <li className="hover:text-white-50">
              <a href="">{t('project')}</a>
            </li>
            <li className="hover:text-white-50">
              <a href="">{t('contact')}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4" >
        <button onClick={()=>{setIsDark(!isDark)}} className="hover:text-white-50 "> 
          {
            isDark ? (
              <Moon className="hover:bg-gray-300 rounded-full cursor-pointer"/>
            ):(
              <Sun className="hover:bg-gray-300 rounded-full cursor-pointer"/>
            )
          }
          
          </button>
        <div className="grid grid-flow-col gap-2 items-center" onClick={()=>{handleChangeLanguages(isClick ? 'vi' :'en')}}>
        <button onClick={()=>{}} className="hover:text-white-50 "> <Globe className="hover:bg-gray-300 rounded-full cursor-pointer"/></button>  
          <div className="ring-1 ">
               {
                i18n.language === 'vi'? "VI" : "EN"
               }
          </div>
         </div>
      </div>
    </>
  );
};

export default Header;
