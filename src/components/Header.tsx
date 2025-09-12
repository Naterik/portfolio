import  {  useState } from "react";
import { Moon,Globe, Sun, AlignJustify  } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { t ,i18n} = useTranslation();
  const [isHidden,setIsHidden]=useState(false);
  const [isChangeLanguage ,setIsChangeLanguage]=useState(false);
  const {isDark,setIsDark}=useTheme();
  const handleChangeLanguages=(language:any)=>{
      i18n.changeLanguage(language)
      setIsChangeLanguage(!isChangeLanguage)
  }

  return (
    <>
    <div className=" w-full">
      <div className="flex flex-col gap-3"> 
        {/* space-x-3   my-4 items-center */}
        <div className="flex justify-between items-center">
            <a href="/" className=" text-2xl font-semibold  text-primary">
         Khuong
        </a>
          <AlignJustify className="hover:text-white-50" onClick={()=>setIsHidden(!isHidden)}/>
        </div>
        {!isHidden ? (<div></div>):
        <div >
          <ul className=" flex flex-col gap-4 ">
            <li>
              <a href="#about" className="hover:text-white-50">
                 {t('about')}
              </a>
            </li>
            <li className="hover:text-white-50">
              <a href="#project">{t('project')}</a>
            </li>
            <li className="hover:text-white-50">
              <a href="#contact">{t('contact')}</a>
            </li>
          </ul>
          <div className="flex flex-col gap-4 mt-4" >
        <button onClick={()=>{setIsDark(!isDark)}} className="hover:text-white-50 "> 
          {
            isDark ? (
              <Moon className="hover:bg-gray-300 rounded-full cursor-pointer"/>
            ):(
              <Sun className="hover:bg-gray-300 rounded-full cursor-pointer"/>
            )
          }
          
          </button>
        <div className="flex gap-3" onClick={()=>{handleChangeLanguages(isChangeLanguage ? 'vi' :'en')}}>
        <button onClick={()=>{}} className="hover:text-white-50 "> <Globe className="hover:bg-gray-300 rounded-full cursor-pointer"/></button>  
          <div className="">
               {
                i18n.language === 'vi'? "VI" : "EN"
               }
          </div>
         </div>
      </div>
        </div>
        }
      </div>

      </div>
    </>
  );
};

export default Header;
