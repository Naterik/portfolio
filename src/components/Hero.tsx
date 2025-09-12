  import React from 'react'
  import { ArrowDownToLine, GitPullRequest, Mail } from 'lucide-react';
  import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
  const Hero = () => {
    const { t } = useTranslation();
    return (
      <div className='py-4 flex flex-col-reverse gap-5 my-3'>
         <div className='w-full'>
          <div className='space-y-5 hidden '>
        <h3 className='text-3xl '>{t('hero_greeting')}</h3>
        <h1 className='text-4xl flex gap-3'>
          {t('hero_im')} <p className='text-primary'>Khuong</p>
        </h1>

        <p className='text-teal-600 text-xl'>
          <TypeAnimation
            sequence={[
              t('hero_roles.intern'),
              1000,
              t('hero_roles.frontend'),
              1000,
              t('hero_roles.fullstack'),
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </p>
</div>
        <div className='flex gap-3 hidden'>
          <a href='https://github.com/Naterik' target='_blank'>
 <GitPullRequest className='size-7 hover:text-primary'/>
          </a>
          <a onClick={(e) => {window.location.href ='mailto:khuong190703@gmail.com'}}> 
  <Mail className='size-7 hover:text-primary'/>
          </a>
        
        </div>

        <form action="Lu-Tien-Khuong-intern-cv.pdf" method='get' className='flex justify-center'>
          <button className='round-button flex  items-center gap-2 gradient font-semibold '>
            {t('hero_resume')}
            <ArrowDownToLine className='w-5.5 h-10'/>
          </button>
        </form>
      </div>
      <div className="rounded-xl ring-2 ring-secondary ">
      <div className="flex gap-3 cursor-vertical-text items-center border-b-secondary border-b-2 p-3">
        <div className="rounded-full bg-red-800 size-3"></div>
        <div className="rounded-full bg-blue-800 size-3"></div>
        <div className="rounded-full bg-green-800 size-3"></div>  
      </div>
      <div className=" p-3 ">
        <code className="text-white-0">
          <div>
            <span className="me-2 text-blue-600">const</span><span className="me-2">developer</span><span className="me-2 text-pink-100">=</span><span>{`{`}</span>
          </div>
          <div>
            <span className="ms-4 me-2">name:</span><span className="text-yellow-500">'Lu Tien Khuong',</span>
          </div>
          <div className="ms-4 me-2 text-pink-400">
            <span className="text-white-0">skills:</span><span>['</span><span>ReactJS</span><span>','</span><span>React Native</span><span>', '</span><span>Redux</span><span>', '</span><span>NoSQL</span><span>', '</span><span>SQL</span><span>', '</span><span>Docker</span><span>'],</span>
          </div>
          <div>
            <span className="ms-4 me-2 ">hardWorker:</span><span className="text-red-500">true</span><span>,</span>
          </div>
                    <div>
            <span className="ms-4 me-2 ">quickLeaner:</span><span className="text-red-500">true</span><span>,</span>
          </div>
          <div>
            <span className="ms-4 me-2 ">problemSolver:</span><span className="text-red-500">true</span><span>,</span>
          </div>
          <div>
            <span className="ms-4 me-2 text-green-700">hireable:</span><span className="text-red-500">function</span><span>() {`{`}</span>
          </div>
          <div>
            <span className="ms-5 me-2 text-red-500">return</span><span>(</span>
          </div>
          <div>
            <span className="ms-5 ps-3 text-blue-400">this.</span><span className="me-2 ">hardWorker</span><span className="text-blue-400">&amp;&amp;</span>
          </div>
          <div>
            <span className="ms-5 ps-3 text-blue-400">this.</span><span className="me-2 ">problemSolver</span><span className="text-blue-400">&amp;&amp;</span>
          </div>
            <div>
            <span className="ms-5 ps-3 text-blue-400">this.</span><span className="me-2 ">quickLeaner</span>
          </div>
          <div>
            <span className="ms-5 me-2 ">);</span>
          </div>
          <div>
            <span className="ms-4">{`};`}</span>
          </div>
          <div>
            <span>{`};`}</span>
          </div>
        </code>
      </div>
    </div>
    </div>
  )
}

export default Hero