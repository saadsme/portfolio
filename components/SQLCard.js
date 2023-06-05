import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link'


export const SQLCard = ({title,desc,image,link}) => (
  <div className="w-full rounded-2xl h-[360px] bg-no-repeat bg-cover bg-center" 
   style={{ backgroundImage: "url('/FinalSQL.png')" }}

  > 
  <Link href="https://ai-sql.tech" target="_blank">
    <div className=" flex flex-col justify-between h-full">
        <div className=" p-5 flex flex-col">
            <div className="uppercase font-bold text-xs dark:text-black">
                Featured Project
            </div>
            <div className="text-4xl font-bold dark:text-black w-4/5">
                Text to SQL Translator
            </div>
        </div>
        <div className="p-5 pt-3 flex backdrop-blur-lg rounded-t-none rounded-2xl flex-end gap-4 max-h-[32%]">
            <div className="text-xs w-3/5 dark:text-black">
            Generate SQL queries from natural language. Powered by the OpenAI GPT3.5 API. 
            </div>
            <div className="w-2/5 flex justify-center items-center">
                <button className=" rounded-2xl text-xs uppercase font-bold bg-blue-100 text-blue-800 py-2 px-5 mt-2 ">More↗</button>
            
            </div>
            
        </div>
    </div>
    </Link>
  </div>
);