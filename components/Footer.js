import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
        <div className='mx-auto'>
            <span className="block h-0.5 max-w-sm bg-gray-300 mb-5 md:max-w-3xl"></span>
            <div className='flex flex-col justify-center  md:flex-row md:justify-between md:px-48'>
                    <div className='flex flex-col space-y-0.5 justify-center items-center mb-3 md:justify-start md:items-start text-gray-500'>
                        <Link className="hover:bg-gray-200 p-1 rounded hover:text-gray-700 "  href={'/'}>Home</Link>
                        {//<Link className="hover:bg-gray-200 p-1 rounded hover:text-gray-700 "  href={'/projects'}>Projects</Link>
                        }
                        <Link className="hover:bg-gray-200 p-1 rounded hover:text-gray-700"  href={'/blog'}>Blog</Link>
                        <Link className="hover:bg-gray-200 p-1 rounded hover:text-gray-700"  href={'/tech'}>Tech</Link>
                        <Link className="underline underline-offset-2 decoration-dotted decoration-1 md:whitespace-nowrap hover:text-gray-700 underline-solid hover:bg-gray-200 p-1 rounded" href={'/docs/cv.pdf'} target="_blank">Resume ↗</Link>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-1 md:space-y-0.5 max-w-3xl mx-6 mb-5 text-gray-500 md:whitespace-nowrap'>
                        <Link className=" flex items-center underline underline-offset-2 decoration-dotted decoration-1 hover:text-gray-700 underline-solid hover:bg-gray-200  rounded" href={'https://github.com/xosaad'} target="_blank">  
                                 <Image src='/logos/github-mark.svg' className='p-1' width={35} height={1}/>
                            Github ↗
                        </Link>
                        <Link className=" flex underline items-center underline-offset-2 decoration-dotted decoration-1 hover:text-gray-700 underline-solid hover:bg-gray-200  rounded" href={'https://github.com/xosaad'} target="_blank">
                                <Image src='/logos/linkedin.png' className='p-1' width={35} height={1}/>
                            LinkedIn ↗
                        </Link>
                        <Link className=" flex items-center underline underline-offset-2 decoration-dotted decoration-1 hover:text-gray-700 underline-solid hover:bg-gray-200  rounded" href={'https://twitter.com/saadcodesjs'} target="_blank">
                                <Image src='/logos/twitter.svg' className='p-1' width={35} height={1}/>
                            Twitter ↗
                        </Link>
                        <Link className=" flex items-center underline underline-offset-2 decoration-dotted decoration-1 hover:text-gray-700 underline-solid hover:bg-gray-200 rounded" href={'mailto:mail@aasaad.me'} target="_blank">
                                <Image src='/logos/mail.png' className='' width={35} height={1}/>
                            Email ↗
                        </Link>
                    </div>
                
                {//<div className='flex flex-col space-y-0.5 mx-6 w-full text-gray-500'>
                    //{/*CAN ADD ANY LINKS OR WHATEVER I LIKE HERE*/}
                    
                    
                //</div>
                }
            </div>
        </div>
  )
}
export default Footer