import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
        <div className='mx-6'>
            <span className="block h-0.5 max-w-2xl bg-gray-300 mb-5 md:max-w-3xl"></span>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-row items-center w-full max-w-3xl mx-6 mb-5 space-x-12 md:space-x-24 text-gray-500'>
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
                </div>
                <div className='space-y-0.5 mx-6 w-full text-gray-500'>
                    {/*CAN ADD ANY LINKS OR WHATEVER I LIKE HERE*/}
                    <Link className="hover:bg-gray-200 p-1 rounded" href={'/howimadethis'}>How I Made This Website</Link>
                </div>
            </div>
        </div>
  )
}
export default Footer