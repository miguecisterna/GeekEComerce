import React from 'react'

export default function FooterFoot() {
  return (
    <div>
      <div className='flex flex-col px-10 py-4'>
        <div className='flex gap-4 py-4'>
          <p>imagen</p>
          <p className='font-bold text-lg'>Nombre de Usuario</p>
        </div>
        <div className=''>
          <a href="">Términos y Condiciones </a>
          <a href="">Cómo cuidamos tu privacidad </a>
          <a href="">Accesibilidad </a>
          <a href="">Informacion al usuario financiero </a>
          <a href="">Defensa del Consumidor </a>
          <a href="">Informacion sobre seguros </a>
          <a href="Blog"></a>
          <a href="Tendencias"></a>
        </div>
        <div className='text-slate-400'>
          <p>© 2020-2023 e-Geek S.R.L.
Av. Falsa 2928, Piso 1, CP 1264, Puerto Madero, CABA</p>
        </div>
      </div>
    </div>
  )
}
