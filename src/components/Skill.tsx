import React, { useState } from "react";
import { MySkill } from "../data";
import { useTranslation } from 'react-i18next';
const Skill = () => {
  const [isPaused,setIsPaused]=useState(false);
  const {t}=useTranslation();
  return (
    <div>
      <h1 className="text-center w-full text-3xl py-4">{t('skills')}</h1>
      <div className="relative flex overflow-x-hidden will-change: transform"                 
                onMouseEnter={()=>setIsPaused(true)}
                onMouseLeave={()=> setIsPaused(false)}>
        <div className={` py-12   whitespace-nowrap flex gap-14 animate-marquee ${isPaused ?"animate-paused":""} `}>
          {[...MySkill,...MySkill].map((skill, index) => {
            return (
              <div
                className="skill shrink-0"
                key={index}
              >
                <img className="size-20 pb-2" src={skill.icon} />
                <div className="text-xl  hover:text-primary">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
