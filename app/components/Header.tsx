import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Nav_links } from '../constants'
import { link } from 'fs'
import Button from './Button'
const Header = () => {
  return (
    <nav className='navbar border-b border-blue-600'>
      <div className='flexBetween container h-16'>
        <Link href="/">
          <Image src='./next.svg' alt='logo' width={74 } height={20} />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {Nav_links.map((link) =>(
            <Link href={link.href} key={link.key} className='regular-16 flexCenter text-grey-50 pb-1.5 cursor-pointer'>
              {link.label}
            </Link>
          ))}
        </ul>
        <div className='lg:flex hidden'>
          <Button  
              type="button"
              title='Contact'
              variant='btn_blue'
          />
       </div>
        <Image className='lg:hidden inline-block cursor-pointer'
          src="menu.svg"
          alt="menu"
          height={32}
          width={32}
        />
     </div>
    </nav>
  )
}

export default Header