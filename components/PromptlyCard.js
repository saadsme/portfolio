import Image from 'next/image'
import Link from 'next/link'


export const PromptlyCard = ({title,desc,image,link}) => (
  <div className="w-full rounded-2xl h-[360px] bg-no-repeat bg-cover bg-center" 
   style={{ backgroundImage: "url('/Promptly.png')" }}

  > 
  <Link href="https://github.com/xosaad/promptly" target="_blank">
    <div className=" flex flex-col justify-between h-full">
        <div className=" p-5 flex flex-col">
            <div className="uppercase font-bold text-xs dark:text-black">
                Featured Project
            </div>
            <div className="text-4xl font-bold dark:text-black">
                Promptly
            </div>
        </div>
        <div className="p-5 pt-3 flex backdrop-blur-lg rounded-t-none rounded-2xl flex-end gap-4 max-h-[32%]">
            <div className="text-xs w-3/5 dark:text-black">
            Share your prompts with the world. Built with Next.js, TailwindCSS, and MongoDB.
            </div>
            <div className="w-2/5 flex justify-center items-center">
                <button className=" rounded-2xl text-xs uppercase font-bold bg-red-100 text-red-800 py-2 px-5 mt-2 ">soon↗</button>
            
            </div>
            
        </div>
    </div>
    </Link>
  </div>
);