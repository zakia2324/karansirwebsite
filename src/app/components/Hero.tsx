
import React from 'react'
import Image from 'next/image'
import Kamran from '../../../public/kamran.jpg'
const Hero=()=>{
  return(
    <div className='flex justify-center items-center p-8 '>
        <section className='content'>
            <h1 className='text-[45px] font-extrabold text-blue-950'>Governor Sindh </h1>
            <h3 className='text-[25px] text-blue-600'>Kamran Khan Tessori</h3>
            <h5 className='text-blue-500'>initiative for <br/>Artificial Intelligence,<br/>web 3.0 & Metaverse</h5>
            <p className='text-blue-950'>Earn upto 50,000/month</p>
           <p className='text-blue-500'>opening the Governer House and <br/>Removing Barriers to Educate the<br/>Youth of sindh</p>
        </section>
        <section className='image'>
            <Image src={Kamran}alt="kamran" className='w-[520] h-[456]'/>


        </section>
      
    </div>
  )
}

export default Hero
