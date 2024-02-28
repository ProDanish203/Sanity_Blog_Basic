import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='text-center py-5 text-text'>
      Made with 
      <span className='text-red-500'> ❤ </span>
      By 
      <Link href="https://danish-siddiqui.vercel.app" className='text-red-500'> Danish Siddiqui</Link>
    </footer>
  )
}
