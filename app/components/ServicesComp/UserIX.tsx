import Image from 'next/image'
import React from 'react'

const UserIX = () => {
  const cards = [
    {title:'UX', alt:'ux', src:'UX.svg'},
    {title:'UI', alt:'ui', src:'UI.svg'},
    {title:'Prototyping', alt:'prototyping', src:'Prototyping.svg'},
    {title:'Mobile Design', alt:'mobile', src:'Mobile.svg'},
    {title:'Web design', alt:'web', src:'Web.svg'},
    {title:'Atomic design', alt:'atomic', src:'Atomic.svg'}
  ]
  const texnoCards = [
    {key:'4', title:'Figma', alt:'figma', scr:'/Figma.svg'},
    {key:'5', title:'Sketch', alt:'sketch', scr:'/Sketch.svg'},
    {key:'6', title:'Lottie', alt:'lottie', scr:'/Lottie.svg'},
    {key:'7', title:'Illustrator', alt:'illustrator', scr:'/Illustrator.svg'}
  ]
  return (
    <div>
      <div className='container'>
        <h1 className='title py-16'>UI/UX Design</h1>
        <div className='flex'>
          <div className='w-1/2 pr-16'>
            <p className='text-2xl text-gray-700 py-4 leading-10'>Our company takes a human-centered approach to design</p>
            <div className='grid grid-cols-3 gap-4'>
              {cards.map((card)=>(
                <div className='bg-blue-50 rounded flex flex-col'>
                  <Image className='m-2'
                         src={card.src}
                         alt={card.alt}
                         width={60}
                         height={60}/>
                  <p className='m-2 text-base font-semibold text-gray-700'>{card.title}</p>
                </div>
              ))}
            </div>
            <h1 className='py-8 text-3xl text-gray-700 font-semibold'>Technologies</h1>
            <div className='flex space-x-4 '>
              {texnoCards.map((card =>(
                <div key={card.key} className='w-1/3 h-20 rounded'>
                  <Image className='m-2' src={card.scr} alt={card.alt} width={60} height={60}/>
                  <p className='m-2 text-xl'>{card.title}</p>
                </div>
              )))}
            </div>
          </div>
          <div className='w-1/2 relative'>
              <div className='relative flex justify-center items-center'>
                <Image className='relative z-10'
                       src='/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png'
                       alt='bg'
                       width={600}
                       height={500}
                       />
                <Image className='absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2'
                       src='/mobile_dev-2.png'
                       alt='mobile'
                       width={400}
                       height={300}
                       />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserIX