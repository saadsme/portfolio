import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link'


export const ManageCard = ({title,desc,image,link}) => (
  <div className="w-full rounded-2xl h-[360px] bg-no-repeat bg-cover bg-center" 
   style={{ backgroundImage: "url('/Manage-banner.png')" }}

  > 
  <Link href="https://xosaad.github.io/ManageLandingPage/" target="_blank">
    <div className=" flex flex-col justify-between h-full">
        <div className=" p-5 flex flex-col">
            <div className="uppercase font-bold text-xs">
                Featured Project
            </div>
            <div className="text-4xl font-bold">
                Manage
            </div>
        </div>
        <div className="p-5 pt-3 flex backdrop-blur-lg rounded-t-none rounded-2xl flex-end gap-4 max-h-[32%]">
            <div className="text-xs w-3/5">
            Exceptional landing page built for the folks over at Manage. 
            </div>
            <div className="w-2/5 flex justify-center items-center">
                <button className=" rounded-2xl text-xs uppercase font-bold bg-orange-100 text-orange-800 py-2 px-5 mt-2 ">More↗</button>
            
            </div>
            
        </div>
    </div>
    </Link>
  </div>
);