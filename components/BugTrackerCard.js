import Image from 'next/image'
import Link from 'next/link'


export const BugTrackerCard = ({title,desc,image,link}) => (
  <div className="w-full rounded-2xl h-[360px] bg-no-repeat bg-cover bg-center" 
   style={{ backgroundImage: "url('/BugTracker-banner-2.png')" }}

  > 
  <Link href={"https://github.com/xosaad/BugTrackerApp"} target="_blank">
    <div className=" flex flex-col justify-between h-full">
        <div className=" p-5 flex flex-col ">
            <div className="uppercase font-bold text-xs text-gray-200">
                Featured Project
            </div>
            <div className="text-4xl font-bold text-gray-100">
                Bug Tracker
            </div>
        </div>
        <div className="p-5 pt-3 flex backdrop-blur-lg rounded-t-none rounded-2xl flex-end gap-4 max-h-[32%]">
            <div className="text-xs w-3/5 text-gray-100">
            Android app that allows users to track bugs in their projects. 
            </div>
            <div className="w-2/5 flex justify-center items-center">
                <button className=" rounded-2xl text-xs uppercase font-bold bg-violet-100 text-violet-800 py-2 px-5 mt-2 ">
                More↗</button>
            
            </div>
            
        </div>
    </div>
    </Link>
  </div>
);