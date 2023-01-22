import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectCard2({title, desc, slug, image, categ, href}) {
  return (
    <div className='w-full group hover:opacity-70 transition duration-150 ease-out hover:ease-in-out'>
        <Link href={href} target='_blank'>
            <div className='flex mb-12 drop-shadow-md'>
              <Image
              className='rounded-lg w-1/2'
                src={image}
                width={1200}
                height={1200}
              />
                <h1 class="underline underline-offset-2 decoration-dotted decoration-1 absolute text-sm opacity-0 text-grey-900
                translate-x-40 translate-y-32 group-hover:opacity-100">
                Read more ↗</h1> 
                <div className=' relative flex flex-col 
                  justify-center w-full text-right'>
                    <div className='absolute right-0 w-[125%]'>
                        <div className='  text-gray-800 text-lg'>Featured Project</div>
                        <div className='font-bold text-3xl'>{title}</div>
                        <div className='mt-4 rounded-lg  text-gray-800 text-md bg-gradient-to-l from-gray-200 to-gray-300 p-7 '>{desc}</div>
                                   <div className='flex justify-end'> { 
                        categ.map((cat) => (
                            <div className='bg-violet-300 text-sm italic rounded-full m-1 px-3 py-1 mt-2 text-center '>{cat}</div>
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

export default ProjectCard2