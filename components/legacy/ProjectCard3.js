import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function ProjectCard3({title, desc, slug, image, categ, href}) {
  return (
    <div className='w-full group hover:opacity-70 transition duration-150 ease-out hover:ease-in-out '>
        <Link href={href} target='_blank'>
            <div className='flex flex-row-reverse mb-12 drop-shadow-md'>
            <h1 class="underline underline-offset-2 decoration-dotted decoration-1 absolute opacity-0 text-sm text-grey-900
                 translate-y-[7.5rem] -translate-x-36 flex group-hover:opacity-100">
                Read more ↗</h1> 
                <Image
                    className='rounded-lg w-1/2'
                     src={image}
                     width={1200}
                    height={1200}
                />
                <div className=' relative flex flex-col justify-center w-full text-left z-9  '>
                    <div className='absolute left-0 w-[125%]'>
                        <div className=' text-lg'>Featured Project</div>
                        <div className='font-bold text-3xl '>{title}</div>
                        <div className='mt-4 rounded-lg  text-gray-800 text-md dark:bg-gray-700 dark:text-gray-100 bg-gray-300 p-7 '>{desc}</div>
                                   <div className='flex '> { 
                        categ.map((cat) => (
                            <div className='bg-orange-200 dark:bg-orange-600 text-sm italic rounded-full m-1 px-3 py-1 mt-2 text-center '>{cat}</div>
                        )
                        )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProjectCard3