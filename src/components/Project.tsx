import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Projector } from 'lucide-react';
import { Projects } from '../data';
import { useEffect, useState } from 'react';
import Student from "../assets/STUDENT.json"
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';

const Project = () => {
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Student,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='py-4'>
      <div className='text-center text-3xl mb-7'>{t('projects_title')}</div>

      <div className='flex justify-around'>
        <div className='size-125'>
          <Lottie {...defaultOptions} />
        </div>

        <div className='flex flex-col space-y-7 '>
          {Projects.map((project, index) => {
            return (
              <a href={project.git} key={index} target="_blank">
                <div className='ring-1 w-120 px-3 rounded-lg'>
                  <p className='py-3 text-center'>{t(project.time)}</p>
                  <div className='flex my-3 items-center'>
                    <div className='mx-3 flex items-center'>
                      <Projector className='size-10' />
                    </div>
                    <div className='ml-4 mb-4 flex flex-col justify-center'>
                      <p className='uppercase font-bold '>{t(project.name)}</p>
                      <p className='uppercase font-bold line-clamp-1'>{t(project.description)}</p>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
