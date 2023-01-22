import React from 'react'

function BasicCard({title, date, company, HighLightstrong, HighLights}) {
  return (
    <div>
        <div class="flex items-center">
    <div class="w-full mb-2">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-xl">{title}</h3>
        <span>{date}</span>
      </div>
      <p class="text-lg">
        {company}
      </p>
      <p class="text-md mt-1">
        <strong>{HighLightstrong}:</strong> {HighLights}
      </p>
    </div>
  </div></div>
  )
}

export default BasicCard