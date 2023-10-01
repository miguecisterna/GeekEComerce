import React from 'react'

export default function Navbar() {
  return (
    <div className="flex gap-4 items-center justify-between bg-[#3e065f] py-[2rem]" >
      <h2>Logo</h2>
      <input type="text" name="search" id="search" />
      <p>hambur</p>
      <p>carrito</p>
    </div>
  )
}
