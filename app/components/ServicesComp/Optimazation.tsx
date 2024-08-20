import Image from 'next/image'
import { ImageResponse } from 'next/server'
import React from 'react'

const Optimazation = () => {
  const cards = [
    {title:'Architecture', alt:'architecture', scr:'Architecture.svg'},
    {title:'Auto testing', alt:'testing', scr:'AutoTesting.svg'},
    {title:'Strees testing', alt:'stress testing', scr:'StressTesting.svg'},
    {title:'Load testing', alt:'loadtesting', scr:'LoadTesting.svg'},
    {title:'Devops', alt:'devops', scr:'Devops.svg'},
    {title:'Cloud', alt:'cloud', scr:'Cloud.svg'},
    {title:'CI/CD', alt:'CICD', scr:'CICD.svg'},
  ]
  return (
    <div className='bg-blue-50 mt-16 py-16'>
      <div className='container'>
        <div className=''>
          <h1 className='title pb-16 w-1/2'>
                Optimization
                Infrastructure
          </h1>
          <div className='flex justify-between gap-16'>
            <div className='w-1/2 relative flex justify-center items-center'>
              <Image className='relative z-10'
                     src='/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png'
                     alt='bg'
                     width={600}
                     height={700}/>
              <Image className='absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2'
                     src='/optimizationPic.png'
                     alt='pic'
                     width={500}
                     height={400}/>
            </div>
            <div className='w-1/2'>
              <p className='text-2xl text-gray-700 py-4 leading-10'>Our experienced professionals will help you optimize your infrastructure</p>
              <div className='grid grid-cols-3 gap-4 '>
                {cards.map((card, index)=>(
                  <div key={index} className='bg-blue-100 rounded'>
                    <Image className='m-2'
                           src={card.scr}
                           alt={card.alt}
                           width={60}
                           height={60}
                           />
                    <p className='m-2 text-base'>{card.title}</p>       
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

export default Optimazation