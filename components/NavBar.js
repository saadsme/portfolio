import Link from 'next/link'
import React from 'react'
import {useState, useEffect} from 'react'
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {useTheme} from "next-themes";

const NavBar = ({openProp}) => {

  let [open,setOpen] = useState(openProp)
  const {systemTheme , theme, setTheme} = useTheme ();
  const [initialThemeLoaded, setInitialThemeLoaded] = useState(false);
  useEffect(() => {
    // Listen for initial theme loaded event
    setInitialThemeLoaded(true);
  }, []);


      const renderThemeChanger = () => {
    const currentTheme = initialThemeLoaded ? (theme === "system" ? systemTheme : theme) : "dark";

    if (currentTheme === "dark") {
      return (
        <SunIcon className="w-7 h-7 text-gray-200" role="button" onClick={() => setTheme('light')} />
      );
    } else {
      return (
        <MoonIcon className="w-7 h-7 text-gray-900" role="button" onClick={() => setTheme('dark')} />
      );
    }
  };
  return (
    <>
    <div className=' flex justify-between items-center my-6 md:m-0 md:hidden ' >
        <div className='HAMBURGER space-y-1.5 md:hidden dark:hover:bg-gray-600 hover:bg-gray-300 p-2 rounded-md' onClick={()=>setOpen(!open)}>
                <span className="block h-0.5 w-5 bg-gray-600 dark:bg-gray-300 "></span>
                <span className="block h-0.5 w-5 bg-gray-600 dark:bg-gray-300 "></span>
                <span className="block h-0.5 w-5 bg-gray-600 dark:bg-gray-300"></span>
        </div>
        <div className="md:hidden flex items-center space-x-2 ">
                <div className=' rounded-2xl p-1 '>{renderThemeChanger()}</div>
                <button type="button" className='group flex max-w-md w-full bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-lg shadow-md rounded-full mx-auto p-1'>
                  <Link className=" underline-offset-2 decoration-dotted decoration-1 text-gray-900 group-hover:text-gray-100 px-3 underline-solid select-none" href={'/docs/cv.pdf'} target="_blank">Resume ↗</Link>     
                </button>
            </div>
        </div>
        <div className=" animate-fadedown mx-auto md:justify-between md:max-w-4xl md:w-full md:my-12 mb-8 dark:text-gray-100 text-gray-700 md:flex">
            <div className={` text-md flex flex-col md:justify-start md:items-center md:flex-row md:pt-0 space-y-2 md:space-y-0 md:mr-6 absolute md:pl-0 pl-6 transition-all duration-250 md:static  rounded-2xl md:z-auto z-[1000] py-4 md:pb-0
               text-white md:text-black   md:dark:text-white dark:text-black  left-5 right-5 ${open ? 'top-20' : 'top-[-490px]'}`}>
              <Link className="hover:bg-gray-200 border-spacing-1 rounded md:py-1 md:px-2 md:mr-6  hover:text-gray-900 " href={'/'}>Home</Link>
              {/* <Link className="hover:bg-gray-200 border-spacing-1 rounded p-1 px-2 hover:text-gray-900" href={'/projects'}>Projects</Link>
              */}
              <Link className="hover:bg-gray-200 border-spacing-1 rounded md:py-1 md:px-2 md:mr-6  hover:text-gray-900" href={'/blog'}>Blog</Link>
              <Link className="hover:bg-gray-200 border-spacing-1 rounded md:py-1 md:px-2 md:mr-6  hover:text-gray-900" href={'/tech'}>Tech</Link>
              
            </div>
            <div className='flex flex-row md:space-x-3 md:items-center'>
              <div className='  rounded-xl p-1 hidden md:block'>{renderThemeChanger()}</div>
              <button type="button" className=' LARGE-SCREEN-RESUMEBUTTON md:whitespace-nowrap text-xs py-1 px-5 hidden md:flex group bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none  shadow-md rounded-full'>
                  <Link className="underline-offset-2 decoration-dotted decoration-1 text-gray-900 group-hover:text-gray-100 md:text-sm underline-solid select-none " href={'/docs/cv.pdf'} target="_blank">Resume ↗</Link>     
              </button>
            </div>
        </div>
        
    
    </>
  )
}

NavBar.defaultProps = {
  openProp: false,
  
};

export default NavBar