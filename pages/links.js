import React from 'react'
import {useState, useEffect} from 'react'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import Head from 'next/head'
import Image from 'next/image'
import { data } from '../data';
import LinkCard from '../components/LinkCard';
import {useTheme} from "next-themes";
const links = () => {
    const {systemTheme , theme, setTheme} = useTheme ();
    const [initialThemeLoaded, setInitialThemeLoaded] = useState(false);
    useEffect(() => {
        // Listen for initial theme loaded event
        setInitialThemeLoaded(true);
      }, []);
    const renderLogo = (social) => {
        const currentTheme = initialThemeLoaded ? (theme === "system" ? systemTheme : theme) : "dark";
    
        if (currentTheme === "dark") {
          return (
            <Image src={social.darkicon} width={30} height={30}/>
          );
        } else {
          return (
            <Image src={social.icon} width={30} height={30}/>
          );
        }
      };
    return(
        <>
        <Head>
        <title>Links - Ahmed Saad</title>
        <meta name="description" content="Ahmed's Saad's social media links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
        <div className='flex flex-col justify-center w-full max-w-4xl px-5 mx-auto mb-16 overflow-x-hidden '>
            <NavBar/>
            <div className='mx-auto w-full max-w-xl flex flex-col justify-center items-center gap-3'>
            <Image 
              className='rounded-full select-none '
                src={'/sq-photo.jpeg'}
                width={120}
                height={120}
              />
            <div className='font-bold'>{data.links.name}</div>
            <div className=''>{data.links.title}</div>
            <div className='flex gap-8 items-center mt-2'>
                {data.links.socials.map((social) => (
                    <a key={Math.random()}  href={social.link} target="_blank" className='hover:cursor-pointer'>
                        {renderLogo(social)}
                    </a>
                ))}
            </div>
            <div className='mt-6 flex flex-col gap-4 w-full max-w-lg'>
                    {data.links.buttons.map((button) => (
                        <LinkCard key={Math.random()} text={button.text} link={button.link} icon={button.icon}/>
                    ))}
            </div>
        </div>
            
            <div className='mt-24 w-full'><Footer/></div>
        </div>
        </>
    )
}

export default links