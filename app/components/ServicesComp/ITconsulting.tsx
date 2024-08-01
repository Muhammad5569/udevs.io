import Image from 'next/image'
import React from 'react'

const ITconsulting = () => {
  const cards = [
    {title:'Frontend', alt:'frontend', src:'/Frontend.svg' },
    {title:'Backend', alt:'backend', src:'/Backend.svg' },
    {title:'Architecture', alt:'architecture', src:'/Architecture.svg' },
    {title:'DevOps', alt:'devops', src:'/DevOps.svg' },
    {title:'UX/UI', alt:'UX/UI', src:'UxUi.svg' },
    {title:'QA', alt:'qa', src:'QA.svg' }
  ]
  return (
    <div id='ITconsulting'>
      <div className='container'>
          <h1 className='title py-16'>IT Consulting</h1>
          <div className='flex justify-between'>
            <div className='w-1/2 pr-16'>
              <p className='text-2xl text-gray-700 py-4 leading-10'>We can improve the qualifications of your employees thereby increasing the efficiency of your company</p>
              <div className='grid grid-cols-3 gap-6'>
                  {cards.map((card)=>(
                    <div className='bg-blue-100 rounded-2xl flex flex-col'>
                      <Image  className='p-2' 
                              src={card.src} 
                              alt={card.alt} 
                              height={60} 
                              width={60}/>
                      <p className='text-xl w-full p-4'>{card.title}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className='w-1/2'>
                  <Image src='/ITConsulting.svg' 
                         alt='pic' 
                         width={600}
                         height={500}/>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default ITconsulting