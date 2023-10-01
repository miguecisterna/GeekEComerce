import React from 'react'
import NavLayout from '../layouts/navLayout'
import Carousel from '../components/carousel'
import Recent from '../components/Recent'
import LastSeen from '../components/LastSeen'

export default function Home() {
  return (
    <div className='flex flex-col gap-4 bg-[#8d05c2] '>
      <div>
        <NavLayout />
        <Carousel />
      </div>

      <div className='flex flex-col gap-4 bg-[#8d05c2] '>
        <Recent />
        <LastSeen />
      </div>

    </div>
  )
}
