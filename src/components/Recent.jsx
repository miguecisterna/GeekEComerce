import React from 'react'
import Card from './Card'

export default function Recent() {
  return (
    <div className='flex justify-center bg-[#8d05c2] '>
      <Card title='Visto Recientemente' product='Este es el producto' foot='Ver historial de navegación' />
    </div>
  )
}
