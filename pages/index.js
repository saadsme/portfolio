import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import BasicCard from '../components/BasicCard';
import BlogCard from '../components/BlogCard';
import { ManageCard } from '../components/ManageCard';
import { BugTrackerCard } from '../components/BugTrackerCard';
import { PortfolioCard } from '../components/PortfolioCard';
import { SQLCard } from '../components/SQLCard';
import { PromptlyCard } from '../components/PromptlyCard';

export default function Home({posts}) {
  let open=false;
  var categs1 = ['Android' , 'Java', 'Firebase', 'APIs']
  var categs2 = ['Tailwind CSS' , 'HTML', 'Javascript']
  var bulletsExp1 = ['Developed an e-commerce web app using ReactJS and APIs built on Strapi.' 
                  ,'Tested websites and applications leading to a decrease in bugs by 70% using software testing methods.'
                  ,'Demonstrated strong technical skills in database administration using MariaDB, and proficiency in multiple content management systems such as Strapi and HCL Dx.'
                  ,'Practised rapid software development using the Agile / Scrum lifecycle.'
                ]
  var bulletsExp2 = ["Built a webapp that evaluates testcases using AI to improve the firm's QA perfomance."
                ,'Utilized the OpenAI GPT3.5 Turbo API for evaluation of the testcases.'
                ,'Successfully integrated the webapp to the production testing tool to provide seamless flow of evaluations.'
              ]
 var bulletsEdu1 = ['Major Electives: Neural Networks & Deep Learning, ML, Mobile App Dev, VR/AR' 
                  ,'Awards: Outstanding Student Scholarship Award, Hamid Jafar Scholarship Award, Undergraduate Research Grant Award'
                ]
  return (
    <>
      <Head>
        <title>Home | Ahmed Abdul Saad</title>
        <meta name="description" content="Website and Blog of Ahmed Abdul Saad." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico"/>
        <meta name="og:image" content="https://www.aasaad.me/OG_image.png" />
        <meta name="image" property="og:image" content="https://www.aasaad.me/OG_image.png"/>
        <meta name="twitter:image" content="https://www.aasaad.me/OG_image.png"/>
        <meta name="author" content="Ahmed Abdul Saad"></meta>
        <meta property="og:url" content="https://aasaad.me"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Home | Ahmed Abdul Saad"/>
        <meta property="og:description" content="Website and Blog of Ahmed Abdul Saad."/>
        <meta property="og:image" content="https://www.aasaad.me/OG_image.png"/>
        
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="aasaad.me"/>
        <meta property="twitter:url" content="https://aasaad.me"/>
        <meta name="twitter:title" content="Home | Ahmed Abdul Saad"/>
        <meta name="twitter:description" content="Website and Blog of Ahmed Abdul Saad."/>
        <meta name="twitter:image" content="https://www.aasaad.me/OG_image.png"></meta>
      </Head>
      
      <main className='flex flex-col w-full max-w-md mx-auto px-5 md:max-w-4xl overflow-x-hidden ' onClick={()=>open=(open?open:!open) }>
        <NavBar open={open}/>
        <div className='w-full'>
          <section>
            <div className='flex flex-col md:flex-row-reverse w-full'>
              <div className='PROFILE PICTURE rounded-full flex justify-center items-center max-w-sm w-1/4 md:w-1/3 bg-gray-100'>
              <Image 
              className='rounded-full select-none'
                src={'/sq-photo.jpeg'}
                width={1200}
                height={1200}
              />
              </div>
              <div className='md:w-4/5'>
                <div className='TITLE font-bold text-3xl mt-3 md:text-4xl '>Ahmed Abdul Saad</div>
                <div className='mt-1 text-gray-800 text-lg dark:text-gray-100'>Freelance Web Developer</div>
                <div className='mt-4 text-gray-500 w-full md:max-w-md text-lg dark:text-gray-100'>I build AI-powered WebApps, 3D Web Experiences and cool landing pages. </div>
                <div className='mt-4 text-gray-500 w-full md:max-w-md text-lg dark:text-gray-100'>Get in touch. </div>
              </div>
            </div>
          </section>
          <section className='mt-8 w-full'>
            <div className='text-2xl font-bold w-full md:text-3xl mb-3'>Projects</div>
            <div className='CARDS SECTION flex w-full flex-col space-y-4'>
            <div className='flex flex-col gap-3 md:hidden'>
                  <SQLCard/>
                  <PromptlyCard/>
                  <ManageCard/>
                  <PortfolioCard/>
                  <BugTrackerCard/>
            </div>
              <div className='ROW1 hidden flex-col w-full space-y-4 md:space-y-2 md:block'>
                <div className='flex gap-2'>
                <SQLCard/>
                <PromptlyCard/>
                </div>
                <div className='flex gap-2'>
                  <ManageCard/>
                  <PortfolioCard/>
                  <BugTrackerCard/>
                </div>
              </div>
              <Link className='text-lg text-gray-500  decoration-dotted decoration-1  dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100' href='https://www.github.com/xosaad' target='_blank' >See all Projects → </Link>
              
              </div>
              
            
          </section>
          <section>
          <div className='my-8 font-bold text-3xl'>Experience</div>
          <div className='flex flex-col gap-2'> 
            <div class=" rounded-2xl px-7 py-5 mb-6 w-full transition-all dark:bg-gray-700 dark:text-gray-100 bg-gray-300">
              <BasicCard title="Software Engineer Intern" date="June 2023" company="Beno Technologies" points={bulletsExp2}/>
            </div>
            <div class="rounded-2xl px-7 py-5 mb-6 w-full transition-all dark:bg-gray-700 dark:text-gray-100 bg-gray-300">
              <BasicCard title="Software Engineering Intern" date="June - Aug 2022" company="Al Ghurair Investment" points={bulletsExp1}/>
            </div>
            </div>
        </section>
          <section>
          <div className='my-8 font-bold text-3xl'>Education</div>
            <div class=" p-7 rounded-2xl dark:bg-gray-700 dark:text-gray-100 bg-gray-300 w-full transition-all">
              
              <BasicCard title="BSc Computer Engineering" date="May 2023" company="American University of Sharjah" points={bulletsEdu1}/>
            </div>
        </section>
        </div>
        
        <div className='mt-24 w-full'><Footer/></div>
        
      </main>
    </>
  )
}
