import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCardMob';
import ProjectCard2 from '../components/ProjectCard2';
import ProjectCard3 from '../components/ProjectCard3';
import ProjectCardMob from '../components/ProjectCardMob';
import BasicCard from '../components/BasicCard';
import BlogCard from '../components/BlogCard';

export default function Home({posts}) {
  let open=false;
  var categs1 = ['Android' , 'Java', 'Firebase', 'APIs']
  var categs2 = ['Tailwind CSS' , 'HTML', 'Javascript']
  var bulletsExp1 = ['Developed an e-commerce web app using ReactJS and APIs built on Strapi.' 
                  ,'Tested websites and applications leading to a decrease in bugs by 70% using software testing methods.'
                  ,'Demonstrated strong technical skills in database administration using MariaDB, and proficiency in multiple content management systems such as Strapi and HCL Dx.'
                  ,'Practised rapid software development using the Agile / Scrum lifecycle.'
                ]
 var bulletsEdu1 = ['Major Electives: Neural Networks & Deep Learning, ML, Mobile App Dev, VR/AR' 
                  ,'Awards: Outstanding Student Scholarship Award, Hamid Jafar Scholarship Award, Undergraduate Research Grant Award'
                ]
  return (
    <>
      <Head>
        <title>Home | Ahmed Abdul Saad</title>
        <meta name="description" content="Ahmed Abdul Saad's Website & Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
      </Head>
      
      <main className='flex flex-col w-full max-w-md mx-auto px-5 md:max-w-3xl overflow-x-hidden ' onClick={()=>open=(open?open:!open) }>
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
                <div className='TITLE font-bold text-3xl mt-3 md:text-5xl '>Ahmed Abdul Saad</div>
                <div className='mt-1 text-gray-800 text-lg dark:text-gray-100'>Computer Engineering @ American University of Sharjah</div>
                <div className='mt-4 text-gray-500 w-full md:max-w-md text-lg dark:text-gray-100'>I love making cool stuff for the web and building machine learning & AI applications. Currently building a MLOps application and learning web dev on the side. Interested in fitness, self-development and basketball.</div>
              </div>
            </div>
          </section>
          <section className='mt-8 w-full'>
            <div className='text-2xl font-bold w-full md:text-3xl mb-3'>Projects</div>
            <div className='CARDS SECTION flex w-full flex-col space-y-4'>
              <div className='ROW1 flex flex-col justify-center items-center space-y-3 md:space-y-0 md:flex-row md:space-x-4 md:hidden'>
                <ProjectCardMob title="Bug Tracker" desc="A minimal, efficient bug tracking Android application built for developer teams to track bugs in their projects. Built with Java and Firebase." image='/BugTracker-final2.png' href='https://github.com/xosaad/BugTrackerApp'/>
                <ProjectCardMob title="Manage Landing Page" desc="A landing page built for Manage using Tailwind CSS, HTML and JavaScript."image='/Manage-final2.png' href='https://github.com/xosaad/ManageLandingPage'/>
              </div>
              <div className='ROW1 hidden flex-col w-full space-y-4 md:space-y-0 md:block'>
                <ProjectCard2 title="Bug Tracker" desc="A minimal, efficient bug tracking Android application built for developer teams to track bugs in their projects. Built with Java and Firebase." image='/BugTracker-final2.png' categ={categs1} href='https://github.com/xosaad/BugTrackerApp'/>
                <ProjectCard3 title="Manage Landing Page" desc="A landing page built for Manage using Tailwind CSS, HTML and JavaScript."image='/Manage-final2.png' categ={categs2} href='https://github.com/xosaad/ManageLandingPage'/>
              </div>
              <Link className='text-lg text-gray-500  decoration-dotted decoration-1  dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100' href='https://www.github.com/xosaad' target='_blank' >See all Projects → </Link>
              
              </div>
              
            
          </section>
          <section>
          <div className='my-8 font-bold text-3xl'>Experience</div>
            <div class="rounded-2xl px-7 py-5 mb-6 w-full transition-all dark:bg-gray-700 dark:text-gray-100 bg-gray-300 hover:animate-pulse">
              <BasicCard title="Software Engineering Intern" date="June - Aug 2022" company="Al Ghurair Investment" points={bulletsExp1}/>
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
