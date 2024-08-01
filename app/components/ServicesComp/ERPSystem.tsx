'use client'
import Image from 'next/image'
import React, { useRef } from 'react'

const ERPSystem = () => {
  const ERPSystemRef = useRef(null)
  const cards = [
    {title:'CRM', alt:'crm', src:'/crm.svg' },
    {title:'eLearning', alt:'elearning', src:'/elearning.svg' },
    {title:'E-Commerce', alt:'ecommerce', src:'/ecommerce.svg' },
    {title:'POS', alt:'pos', src:'/pos.svg' },
    {title:'SMS/Mail', alt:'sms/mail', src:'sms.svg' },
    {title:'Warehouse', alt:'warehouse', src:'warehouse.svg' }
  ]
  return (
    <div id='ERPSystem' ref={ERPSystemRef} className='bg-blue-50 mt-24'>
      <div className='container'>
        <div>
          <h1 className='title py-16'>ERP System</h1>
          <div className='flex justify-between'>
            <div className='w-1/2 relative pr-16'>
              <div className='relative flex justify-center items-center'>
                <Image className='relative z-10'
                       src='/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png' 
                       alt='pic' 
                       width={500} 
                       height={500}/>
                <Image className='absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2'
                       src='/desktop-be2444bb4c87961054714533a5d5a728.png'
                       alt='pic2'
                       width={500}
                       height={300}/>
              </div>
            </div>
            <div className='w-1/2 pl-8'>
               <p className='text-2xl text-gray-700 py-4 leading-10'>IT Systems of any level of complexity at a convenient time for you</p>
               <div className='grid grid-cols-3 gap-6'>
                  {cards.map((card, index)=>(
                    <div key={index} className='bg-blue-100 rounded-2xl flex flex-col'>
                      <Image  className='p-2' src={card.src} alt={card.alt} height={60} width={60}/>
                      <p className='text-xl w-full p-4'>{card.title}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ERPSystem