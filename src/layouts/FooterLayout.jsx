import React from 'react'
import CarouselHowToPay from '../components/CarouselHowToPay'
import Regret from '../components/regret'
import BuyerNorms from '../components/BuyerNorms'
import Help from '../components/help'
import GoToApp from '../components/GoToApp'
import FooterNav from '../components/FooterNav'
import FooterFoot from '../components/FooterFoot'

export default function FooterLayout() {
  return (
    <div className='bg-[#700b97]'>
      <CarouselHowToPay/>
      <Regret/>
      <BuyerNorms/>
      <Help/>
      <GoToApp/>
      <FooterNav/>
      <hr />
      <FooterFoot/>
    </div>
  )
}
