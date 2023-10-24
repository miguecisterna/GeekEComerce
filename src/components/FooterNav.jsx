import React from 'react'

export default function FooterNav() {
  return (
    <div className='flex'>
    <div className='flex flex-col gap-3 text-[#130e16] pl-10 py-10'>
      <a href="" className='w-[40vw]'>Mi Cuenta</a>
      <a href="" className='w-[40vw]'>Historial</a>
      <a href="" className='w-[40vw]'>Favoritos</a>
      <a href="" className='w-[40vw]'>Categorías</a>
      <a href="" className='w-[40vw]'>Ayuda</a>
    </div>

    <div className='flex flex-col gap-3 text-[#130e16] py-10'>
      <a href="" className='w-[40vw]'>Mis Compras</a>
      <a href="" className='w-[40vw]'>Ofertas</a>
      <a href="" className='w-[40vw]'>Tiendas Oficiales</a>
      <a href="" className='w-[40vw]'>Mercado Puntos</a>
      <a href="" className='w-[40vw]'>Vender</a>
    </div>
    </div>
  )
}
