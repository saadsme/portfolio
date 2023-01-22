import Link from 'next/link'
import React from 'react'

function ProjectCardMob({title, desc, slug, image, href}) {
  return (
    <div className='w-full max-w-md group hover:opacity-70'>
        <Link href={href} target='_blank'>
        <img className='rounded-t-lg' src={image}></img>
        <h1 class="underline underline-offset-2 decoration-dotted decoration-1 absolute text-sm opacity-0 translate-x-48 -translate-y-36 group-hover:opacity-100">
            Read more ↗</h1>   
        <div className='bg-gray-100 rounded-b-lg  p-5 w-full'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <div className='text-gray-800'>{desc}</div>
        </div>
        </Link>
    </div>
  )
}

export default ProjectCardMob