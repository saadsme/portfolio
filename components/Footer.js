import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
        <div className='flex flex-col max-w-3xl w-full mx-3 px-4 justify-center items-center'>
            <span className="block h-0.5 max-w-3xl w-full bg-gray-300 mb-5"></span>
            <div className='flex flex-row items-start w-full max-w-3xl mx-6 mb-16 space-x-24 text-gray-500'>
                
                <div className='flex flex-col space-y-0.5'>
                    <Link className="hover:bg-gray-200 p-1 rounded"  href={'/'}>Home</Link>
                    <Link className="hover:bg-gray-200 p-1 rounded"  href={'/projects'}>Projects</Link>
                    <Link className="hover:bg-gray-200 p-1 rounded"  href={'/blog'}>Blog</Link>
                    <Link className="hover:bg-gray-200 p-1 rounded"  href={'/tech'}>Tech</Link>
                </div>
                <div className='flex flex-col space-y-0.5'>
                    <Link className="hover:bg-gray-200 p-1 rounded" href={'https://github.com/xosaad'}>Github</Link>
                    <Link className="hover:bg-gray-200 p-1 rounded" href={'https://www.linkedin.com/in/saad26/'}>LinkedIn</Link>
                    <Link className="hover:bg-gray-200 p-1 rounded" href={'https://twitter.com/saadcodesjs'}>Twitter</Link>
                    <Link className="hover:bg-gray-200 p-1 rounded" href={'mailto:aasaad26@gmail.com'}>Email</Link>
                </div>
                <div className='flex flex-col space-y-0.5'>
                    <Link className="hover:bg-gray-200 p-1 rounded"  href={'/howimadethis'}>How I Made This</Link>
                </div>
            
            </div>
        </div>
  )
}
export default Footer