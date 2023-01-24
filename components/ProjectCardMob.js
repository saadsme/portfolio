import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectCardMob({title, desc, slug, image, href}) {
  return (
    <div className='w-full max-w-md group hover:opacity-70'>
        <Link href={href} target='_blank'>
        <Image
                    className='rounded-t-lg w-full'
                    src={image}
                    width={1200}
                    height={1200}
                />
          
        <div className='bg-gray-100 rounded-b-lg  p-5 w-full'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <div className='text-gray-800'>{desc}</div>
        </div>
        </Link>
    </div>
  )
}

export default ProjectCardMob