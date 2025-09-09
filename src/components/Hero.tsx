import React from 'react'
import { ArrowDownToLine, GitPullRequest, Mail } from 'lucide-react';
const Hero = () => {
  return (
    <div className='py-4 flex justify-around my-3'>
      <div className='w-full space-y-5 '>
          <h3 className='text-3xl '>Hi, There 👋 </h3>
          <h1 className='text-4xl flex gap-3'>I'm <p className='text-primary'>Khuong</p></h1>
          <p className='text-teal-600 text-xl'>text</p>
          <div className='flex gap-3'>
            <GitPullRequest className='size-7 hover:text-primary'/>
             <Mail className='size-7 hover:text-primary'/>
          </div>
          <button className='round-button flex items-center gap-2 gradient'>
                  Resume
                  <ArrowDownToLine className='w-4'/>
          </button>
      </div>
      <div className="rounded-xl ring-2 ring-secondary ">
      <div className="flex gap-3 cursor-vertical-text items-center border-b-secondary border-b-2 p-3">
        <div className="rounded-full bg-amber-800 size-3"></div>
        <div className="rounded-full bg-amber-800 size-3"></div>
        <div className="rounded-full bg-amber-800 size-3"></div>
      </div>
      <div className=" p-3 ">
        <code className="text-white-0">
          <div>
            <span className="me-2 text-pink-100">const</span><span className="me-2">developer</span><span className="me-2 text-pink-100">=</span><span>{`{`}</span>
          </div>
          <div>
            <span className="ms-4 me-2">name:</span><span className="text-yellow-500">'Hỏi Dân IT',</span>
          </div>
          <div className="ms-4 me-2 text-pink-200">
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
            <span className="ms-5 ps-3 text-blue-100">this.</span><span className="me-2 ">hardWorker</span><span className="text-blue-100">&amp;&amp;</span>
          </div>
          <div>
            <span className="ms-5 ps-3 text-blue-100">this.</span><span className="me-2 ">problemSolver</span><span className="text-blue-100">&amp;&amp;</span>
          </div>
            <div>
            <span className="ms-5 ps-3 text-blue-100">this.</span><span className="me-2 ">quickLeaner</span><span className="text-blue-100"></span>
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