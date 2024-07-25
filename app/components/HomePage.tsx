import Image from 'next/image'
import React from 'react'
import Button from './Button'

const HomePage = () => {
  return (
    <div className='py-24'>
      <div className='container'>
      <div className='flex justify-between mt-8'>
        <div className='max-w-lg'>
          <Image src='/logo.svg' alt='logo' width={270}  height={170}/>
          <div className=''>
            <p className='max-w-fit text-4xl py-8 text-gray-700 leading-10'>IT-Outsoursing Company</p>
            <div>
              <p className='text-5xl pb-10 text-blue-700 leading-10'>Development of mobile appications</p>
            </div>
          </div>
          <div className='h-14 w-1/2'>
            <Button  
              type="button"
              title='Contact'
              variant='btn_blue h-14 w-full'
            />
          </div>
        </div>
        <div className='max-w-lg' >
          <Image 
              src='/hero-304cdf863047286a47c1e063154824d8.svg'  
              alt='hero'  
              width='600' 
              height='500'
              sizes='100vh'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomePage