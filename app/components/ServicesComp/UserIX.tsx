import Image from 'next/image'
import React from 'react'

const UserIX = () => {
  const cards = [
    {id: '1', title:'UX', alt:'ux', src:'UX.svg'},
    {id: '2', title:'UI', alt:'ui', src:'UI.svg'},
    {id: '3', title:'Prototyping', alt:'prototyping', src:'Prototyping.svg'},
    {id: '4', title:'Mobile Design', alt:'mobile', src:'Mobile.svg'},
    {id: '5', title:'Web design', alt:'web', src:'Web.svg'},
    {id: '6', title:'Atomic design', alt:'atomic', src:'Atomic.svg'}
  ]
  const texnoCards = [
    {id: '7', title:'Figma', alt:'figma', src:'/Figma.svg'},
    {id: '8', title:'Sketch', alt:'sketch', src:'/Sketch.svg'},
    {id: '9', title:'Lottie', alt:'lottie', src:'/Lottie.svg'},
    {id: '10', title:'Illustrator', alt:'illustrator', src:'/Illustrator.svg'}
  ]
  return (
    <div>
      <div className='container'>
        <h1 className='title py-16'>UI/UX Design</h1>
        <div className='flex justify-between gap-8'>
          <div className='w-1/2 pr-16'>
            <p className='text-2xl text-gray-700 py-4 leading-10'>Our company takes a human-centered approach to design</p>
            
            
            
            <div className='grid grid-cols-3 gap-4 mt-8'>
              {cards.map(card => (
                <div key={card.id} className='bg-blue-50 rounded flex flex-col'> {/* Highlight: key={card.id} */}
                  <Image className='m-2'
                         src={card.src}
                         alt={card.alt}
                         width={60}
                         height={60}/>
                  <p className='p-2 text-base font-semibold text-gray-700'>{card.title}</p>
                </div>
              ))}
            </div>
            
            <h1 className='py-8 text-3xl text-gray-700 font-semibold'>Technologies</h1>
            <div className='flex space-x-4 '>
              {texnoCards.map(card => (
                <div key={card.id} className='w-1/3 h-20 rounded'> {/* Highlight: key={card.id} */}
                  <Image className='' src={card.src} alt={card.alt} width={50} height={50}/>
                  <p className='text-xl'>{card.title}</p>
                </div>
              ))}
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
