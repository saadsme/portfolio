import Link from 'next/link'
import Image from 'next/image'
import {React, useState} from 'react'
import { Resend } from 'resend';

const Footer = () => {
    const [email, setEmail] = useState('');
    const subscribeToNewsletter = async () => {
    
        //const resend = new Resend("re_8AcHGT4F_BjvXdySW2tX81oNwULQM6Z8L");
        var response = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
              'Content-Type': 'application/json',
            },
            })
            if(response.status === 200){
               
                var response = await fetch('/api/sendWelcomeMail', {
                    method: 'POST',
                    body: JSON.stringify({ email }),
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    })
                    if(response.status === 200){
                        alert('Thanks for subscribing! You might wanna check your email for a little surprise!😉')
                    }
                    else{
                        alert('Error Sending Welcome Mail!')
                    }
            }
            else{
                alert('Error Subscribing!')
            }

        
          //setEmail('');
     }
  return (
        <div className='mx-auto '>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className='font-bold text-3xl'>
            Join My Newsletter👇
            </div>
            <div className='flex max-w-sm gap-1'>
                <input className='border-2 border-gray-300 rounded-xl p-2 w-96 text-sm ' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'/>
                <button className='bg-gray-900 text-gray-100 rounded-xl p-2  text-sm' onClick={subscribeToNewsletter}>Subscribe</button>
            </div>
            </div>
            <span className="block h-0.5 w-full bg-gray-300 mb-5 md:max-w-4xl mt-5"></span>
            <div className='flex flex-col justify-center  md:flex-row md:justify-between md:px-48 '>
                
                    <div className='flex flex-col space-y-0.5 justify-center items-center mb-3 md:justify-start md:items-start text-gray-500 dark:text-gray-300'>
                        <Link className="hover:bg-gray-200 p-1 rounded hover:text-gray-700 "  href={'/'}>Home</Link>
                        {//<Link className="hover:bg-gray-200 p-1 rounded hover:text-gray-700 "  href={'/projects'}>Projects</Link>
                        }
                        <Link className="hover:bg-gray-200 p-1 rounded hover:text-gray-700"  href={'/blog'}>Blog</Link>
                        <Link className="hover:bg-gray-200 p-1 rounded hover:text-gray-700"  href={'/tech'}>Tech</Link>
                        <Link className="underline underline-offset-2 decoration-dotted decoration-1 md:whitespace-nowrap hover:text-gray-700 underline-solid hover:bg-gray-200 p-1 rounded" href={'/docs/cv.pdf'} target="_blank">Resume ↗</Link>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-1 md:space-y-0.5 max-w-3xl mx-6 mb-5 text-gray-500 md:whitespace-nowrap dark:text-gray-300'>
                        <Link className=" flex items-center underline underline-offset-2 decoration-dotted decoration-1 hover:text-gray-700 underline-solid hover:bg-gray-200  rounded px-1" href={'https://github.com/xosaad'} target="_blank">  
                                 <Image src='/logos/github-mark.svg' className='p-1' alt='logo' width={35} height={1}/>
                            Github ↗
                        </Link>
                        <Link className=" flex underline items-center underline-offset-2 decoration-dotted decoration-1 hover:text-gray-700 underline-solid hover:bg-gray-200  rounded px-1" href={'https://github.com/xosaad'} target="_blank">
                                <Image src='/logos/linkedin.png' className='p-1' alt='logo' width={35} height={1}/>
                            LinkedIn ↗
                        </Link>
                        <Link className=" flex items-center underline underline-offset-2 decoration-dotted decoration-1 hover:text-gray-700 underline-solid hover:bg-gray-200  rounded px-1" href={'https://twitter.com/saadcodesjs'} target="_blank">
                                <Image src='/logos/twitter.svg' className='p-1' alt='logo' width={35} height={1}/>
                            Twitter ↗
                        </Link>
                        <Link className=" flex items-center underline underline-offset-2 decoration-dotted decoration-1 hover:text-gray-700 underline-solid hover:bg-gray-200 rounded px-1" href={'mailto:hello@saads.me'} target="_blank">
                                <Image src='/logos/mail.png' className='' alt='logo' width={35} height={1}/>
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