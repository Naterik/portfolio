import React from 'react'

const About = () => {
  return (
    <div className='w-full flex justify-between py-4'>
      <div className='tracking-wide'>
        <h1 className='uppercase text-3xl font-bold leading-10 '>Let me <span className='text-primary'>introduce </span>myself :</h1>
        <p >I’m a final-year Software Engineering student who loves coding</p>
<p>I build web with <span className='text-primary font-about font-bold'>ReactJS, TailwindCSS</span>; <br></br> also work with <span className='text-primary font-about font-bold'>NodeJs/Express</span> </p>
<p>I'm feel interest with building thing and want to understand the mystery around the daily life</p>
<p>Disciplined, curious, <span className='text-primary font-about font-bold'>internship-ready</span>, follow your process, and deliver on time.</p>
      </div>
      <div className='flex'>
            <img src='/225137335-fat-thick-cheerful-bear-toy-bear-very-round-animal-adorable-3d-illustration-on-white-unusual.jpg' className='size-50 object-cover rounded-full'/>
            <div className='flex flex-col justify-center '>
              <div className='bg-indigo-700 p-3 rotate-90 my-7 uppercase font-medium rounded-lg'>About me</div>
              <div className='w-full flex justify-center'><div className='bg-indigo-700 w-0.5 h-20 mb-3'></div></div>
            </div>
      </div>
    </div>
  )
}

export default About