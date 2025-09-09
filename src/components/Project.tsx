import { IceCream, User2 } from 'lucide-react'
import React from 'react'

const Project = () => {
  return (
    <div>
      <div>Personal project</div>
      <div className='flex justify-between'>
        <IceCream/>
        <div className='ring-1 w-100'>
          <p className='my-3'>Feb 2025 - May 2025</p>
          <div className='flex '>
                <div className='mx-3 flex items-center'><User2/></div>
                <div className='flex flex-col'><p>111</p><p>111</p></div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Project