import React from 'react'
import { MySkill } from '../data'

const Skill = () => {
    
  return (
    <div>
      <h1 className='text-center w-full text-3xl py-4'>Skills</h1>
    
    <div className='py-4 ' >
      <div className='skill '>
        <img className='size-20 pb-2' src='public/icon_skill/react-original.svg'/>
        <div className='text-xl  hover:text-primary'>React</div>
      </div>
    </div>
    
    </div>
  )
}

export default Skill