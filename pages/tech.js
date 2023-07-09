import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Head from 'next/head'


export default function Tech(){
    return(
        <>
        <Head>
        <title>Tech - Ahmed Saad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
        <div className='flex flex-col justify-center w-full max-w-4xl px-5 mx-auto mb-16 overflow-x-hidden '>
            <NavBar/>
            <div className='TITLE font-bold text-4xl md:mt-16 md:text-5xl dark:text-gray-100'>Tech</div>
            <div className='PAGEINTRO text-xl text-gray-500 my-5 dark:text-gray-300'>Hey there! This page shows a list of all the tech products that I have and use regularly.</div>
            <div className='MAIN-PAGE-SECTION space-y-12 '>
                <div className='SECTION 1'>
                    <h1 className='font-bold text-2xl mb-2 text-gray-800 dark:text-gray-300 '>Daily Tech</h1>
                    <ul className='ml-5 text-lg space-y-3 text-gray-500 list-disc dark:text-gray-300'>
                        <li>iPhone 13 mini</li>
                        <li>MacBook Pro (13-inch, 2018, Four Thunderbolt 3 ports)</li>
                        <li>AmazonBasics Felt Laptop Sleeve</li>
                        <li>iPad mini 4th Generation with stylus</li>
                    </ul>
                </div>

                <div className='MySETUP space-y-2 mb-2 text-gray-800 dark:text-gray-300'>
                    <h1 className='font-bold text-2xl'>My Setup</h1>
                    <ul className='ml-5 text-lg space-y-3 text-gray-500 list-disc dark:text-gray-300'>
                        <li>IKEA Malm Desk in Black-brown (140x65cm)</li>
                        <li>MacBook Pro (13-inch, 2018, Four Thunderbolt 3 ports)</li>
                        <li>BenQ 24inch 1080p Monitor (2475H) </li>
                        <li>Anne Pro 2 Mechanical Keyboard with Brown Switches</li>
                        <li>Sandisk 1TB SSD with Thunderbolt Speed</li>
                    </ul>
                </div>

                <div className='PHOTOGRAPHY space-y-2 mb-2 text-gray-800 dark:text-gray-300'>
                    <h1 className='font-bold text-2xl'>Photography</h1>
                    <ul className='ml-5 text-lg space-y-3 text-gray-500 list-disc dark:text-gray-300'>
                        <li>Nikon D3100 </li>
                        <li>Nikon 18-55mm Kit Lens</li>
                        <li>Nikon 70-300mm Zoom Lens</li>
                        <li>Basic Amazon Tripod</li>
                        <li>Zhiyun Smooth Q Gimbal for Mobiles</li>
                        <li>Sandisk 32GB SD Card (x2)</li>
                    </ul>
                </div>
            </div>
            
            <div className='mt-24 w-full'><Footer/></div>
        </div>
        </>
    )
}