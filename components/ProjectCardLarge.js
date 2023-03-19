import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectCardLarge({title, desc, slug, image, categ, href}) {
  return (
    <div className='w-full group hover:opacity-70 transition duration-150 ease-out hover:ease-in-out bg-gray-300 rounded-lg'>
        <Link href={href} target='_blank'>
            <div className='flex mb-12 drop-shadow-md w-full'>
              <Image
              className='rounded-lg w-1/2 bg-pink-100'
                src={image}
                width={15}
                height={20}
              />
                
                <div className='  flex flex-col justify-center w-full text-left'>
                    <div className=''>
                        <div className='  text-gray-800 text-lg'>Featured Project</div>
                        <div className='font-bold text-3xl'>{title}</div>
                        <div className='mt-4 rounded-lg  text-gray-800 text-md  p-7 '>{desc}</div>
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

export default ProjectCardLarge