import React from 'react'

export default function Card({ title, product, foot }) {
  return (
    <div className='flex flex-col w-[95vw] h-[80vh] bg-[#700b97]  rounded-lg'>
      <h2 className='h-[10%] flex items-center pl-[1rem]'>{title}</h2>
      <hr />
      <div className='h-[80%]'>
        {product}
      </div>
      <hr />
      <h2 className='h-[10%] flex items-center pl-[1rem]'>{foot}</h2>
    </div>
  )
}
