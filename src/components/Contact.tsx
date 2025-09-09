import {  Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className='py-4'>
      <h1 className='text-3xl text-center mx-auto'>Contact</h1>
      <p className='text-center mx-auto tracking-wider mb-5'>Get in touch about an internship opportunity!<br/>I'm ready to learn, grow, and take on new challenges, can't wait to hear from you!</p>
  
    <div className='grid grid-cols-3 justify-items-center '>
      <div className='text-center'>
 <Mail className='size-7 mx-auto'/>
 <p className='text-lg'>Email</p>
 <button onClick={(e) => {window.location.href ='mailto:khuong190703@gmail.com'}}>khuong190703@gmail.com</button>
      </div>
      <div className='text-center'>
        <Phone className='size-7 mx-auto'/>
        <p className='text-lg'>Phone</p>
<a href="tel:0968403782">+84 379627003</a>
      </div>
      <div className='text-center' >
         <MapPin  className='size-7 mx-auto'/>
         <p className='text-lg'>Location</p>
         <a href="https://maps.app.goo.gl/P1dxGgrbiog77rqe7">Hanoi,VietNam</a>
      </div>
    </div>
</div>
  )
}

export default Contact