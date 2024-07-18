'use client';
import React, { useRef } from 'react'
import ServicesCard from './ServicesCard'

const Direction = () => {
  const directionRef = useRef(null)
  return (
    <div id='direction' ref={directionRef}>
      <div className='container'>
        <div className='py-24'>
          <main className="mx-auto mt-16">
            <ServicesCard />
          </main>
        </div>
       
      </div>
    </div>

  )
}

export default Direction