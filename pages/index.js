import Head from 'next/head'
import Footer from '../components/Footer';



import NavBar from '../components/NavBar';





export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Ahmed Saad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16 md:max-w-3xl'>
        <NavBar/>
        <div className='mx-3 px-3'>
        <div className='flex flex-row '>
          <div className='w-4/5'>
            <div className='TITLE font-bold text-4xl mt-10 md:text-5xl'>Ahmed Abdul Saad</div>
            <div className=' mt-4 text-gray-500'>Computer Engineering @ American University of Sharjah</div>
            <div className=' mt-4 text-gray-500 max-w-md '>I love making cool stuff for the web and building machine learning & AI applications. Currently building a MLOps application and learning web dev on the side. Interested in fitness, self-development and basketball.</div>
          </div>
          <div className=' PROFILE PICTURE max-w-sm my-10 w-1/3'>
            <img className="rounded-full "src="/sq-photo.jpeg"></img>
          </div>
          
        </div>
        
        </div>
        <div className='mt-96'><Footer/></div>
        
      </main>
    </>
  )
}
