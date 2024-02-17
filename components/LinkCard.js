import React from 'react'
import Image from 'next/image'
const LinkCard = ({text, link, icon}) => {
  return (
    <a href={link} className='hover:cursor-pointer bg-black text-white dark:bg-white text-md dark:text-black rounded-full px-6 py-4 w-full flex justify-between'>
       <div className='flex items-center'>
        {/* <Image src={icon} width={30} height={30}/> */}
        <div >{text}</div>
       </div>
        <div className='text-white bg-white items-center flex rounded-full p-1'>
            <img src='/right-arrow.svg' width={20} height={20}/>
        </div>
    </a>
    
  )
}

export default LinkCard