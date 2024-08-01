import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const variables = [
    { 
      title: 'About Us', 
      texts: [
        { text: 'Direction', href: '#' },
        { text: 'Command', href: '#' },
        { text: 'Tools', href: '#' },
        { text: 'Clients', href: '#' }
      ] 
    },
    { 
      title: 'Services', 
      texts: [
        { text: 'Development of Mobile applications', href: '#' },
        { text: 'Development and Implementation ERP system', href: '#' },
        { text: 'User interface, User experience design', href: '#' },
        { text: 'IT consulting', href: '#' },
        { text: 'Optimization IT consulting Infrastructure', href: '#' }
      ]
    },
    { 
      title: 'Portfolio', 
      texts: [
        { text: 'Delever', href: '#' },
        { text: 'SMS.uz', href: '#' },
        { text: 'Goodzone', href: '#' },
        { text: 'Iman', href: '#' }
      ] 
    }
  ];
  
  return (
    <div className='bg-blue-50'>
      <div className='container'>
        <div className='mt-16'>
          <div className='p-12'>
            <Image className='mx-auto' src='/logo.svg' alt='logo' width={130} height={130} />
          </div>
          <div className='grid grid-cols-3 pb-8'>
            {variables.map((variable, index) => (
              <div key={index}>
                <h3 className='text-xl font-bold text-blue-700  pb-2 mb-4'>{variable.title}</h3>
                <div className=''>
                  {variable.texts.map((text, textIndex) => (
                    typeof text === 'string' ? (
                      <p key={textIndex}>{text}</p>
                    ) : (
                      <a className='text-blue-500 no-underline hover:underline block mb-2' key={textIndex} href={text.href}>{text.text}</a>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div> 
          <div className='border-t-2 flex justify-between py-6'>
            <p className='text-blue-500'>© 2024 Udevs. All rights reserved</p>
            <Image className='relative' src='/FacebookInstagramX.svg' alt='instagram' width={100} height={10}/>  
          </div> 
        </div>
      </div>
    </div>
  );
  
}

export default Footer