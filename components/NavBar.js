import Link from 'next/link'
import React from 'react'
import {useState} from 'react'

const NavBar = () => {

  let [open,setOpen] = useState(false)
  return (
    <>
    <div className='flex justify-between items-center my-6 md:m-0 md:hidden' onClick={()=>setOpen(!open)}>
        <div className='HAMBURGER space-y-1.5 md:hidden'>
                <span className="block h-0.5 w-5 bg-gray-600"></span>
                <span className="block h-0.5 w-5 bg-gray-600"></span>
                <span className="block h-0.5 w-5 bg-gray-600"></span>
        </div>
        <div class="md:hidden">
                <button type="button" class='group flex max-w-md w-full bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-lg shadow-md rounded-full mx-auto p-2'>
                  <Link className=" underline-offset-2 decoration-dotted decoration-1 text-gray-900 group-hover:text-gray-100 px-3 underline-solid" href={'/docs/cv.pdf'} target="_blank">Resume ↗</Link>     
                </button>
            </div>
        </div>
        <div className=" flex-row justify-between max-w-3xl md:w-full md:my-12 mx-auto mb-8  text-gray-700 md:flex">
            <div className={`flex flex-col md:justify-start md:items-center md:flex-row pt-6 md:pt-0 text-lg space-y-2 md:space-y-0 md:space-x-12 absolute md:pl-0 pl-9 transition-all duration-500 md:static bg-gray-200 md:bg-white rounded-2xl md:z-auto z-[1000] pb-8 md:pb-0  left-5 right-5 ${open ? 'top-20' : 'top-[-490px]'}`}>
              <Link className="hover:bg-gray-200 border-spacing-1 rounded md:p-1 md:px-0 hover:text-gray-900" href={'/'}>Home</Link>
              {//<Link className="hover:bg-gray-200 border-spacing-1 rounded p-1 px-2 hover:text-gray-900" href={'/projects'}>Projects</Link>
              }
              <Link className="hover:bg-gray-200 border-spacing-1 rounded md:p-1 md:px-0 hover:text-gray-900" href={'/blog'}>Blog</Link>
              <Link className="hover:bg-gray-200 border-spacing-1 rounded md:p-1 md:px-0 hover:text-gray-900" href={'/tech'}>Tech</Link>
            </div>
            <div>
            <button type="button" className=' LARGE-SCREEN-RESUMEBUTTON md:whitespace-nowrap text-lg py-2 px-5 hidden md:flex group bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none  shadow-md rounded-full'>
                  <Link className="underline-offset-2 decoration-dotted decoration-1 text-gray-900 group-hover:text-gray-100 md:text-lg underline-solid" href={'/docs/cv.pdf'} target="_blank">Resume ↗</Link>     
            </button>
            </div>
        </div>
        
    
    </>
  )
}

export default NavBar