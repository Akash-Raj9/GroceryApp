import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='relative' >
      <img className='w-full hidden md-block' src={assets.main_banner_bg} alt="banner background Image" />
      <img className='w-full md-hidden' src={assets.main_banner_bg_sm} alt="Background_sm" />
    </div>
  )
}

export default Banner
