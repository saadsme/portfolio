import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex md:justify-center'>
        <nav className="hidden flex justify-between max-w-2xl text-lg m-6 mb-12 space-x-12 text-gray-700 md:block">
            <Link className="hover:bg-gray-200 border-spacing-1 rounded p-1 px-2" href={'/'}>Home</Link>
            <Link className="hover:bg-gray-200 border-spacing-1 rounded p-1 px-2" href={'/projects'}>Projects</Link>
            <Link className="hover:bg-gray-200 border-spacing-1 rounded p-1 px-2" href={'/blog'}>Blog</Link>
            <Link className="hover:bg-gray-200 border-spacing-1 rounded p-1 px-2" href={'/tech'}>Tech</Link>
        </nav>
    
        <div className='HAMBURGER space-y-1.5 m-6 mb-12 md:hidden'>
                <span className="block h-0.5 w-5 bg-gray-600"></span>
                <span className="block h-0.5 w-5 bg-gray-600"></span>
                <span className="block h-0.5 w-5 bg-gray-600"></span>
            
        </div>
    
    </div>
  )
}

export default NavBar