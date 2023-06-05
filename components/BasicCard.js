import React from 'react'

function BasicCard({title, date, company,points}) {
  return (
    <div>
        <div class="flex items-center ">
    <div class="w-full mb-2">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-xl">{title}</h3>
        <span className='text-sm'>{date}</span>
      </div>
      <p class="text-md italic">
        {company}
      </p>
      <ul class=" mt-1 px-3 list-disc">
      { 
        points.map((cat) => (
          <li className='m-1 list-disc'>{cat}</li>
          )
          )}
        
      </ul>
    </div>
  </div></div>
  )
}

export default BasicCard