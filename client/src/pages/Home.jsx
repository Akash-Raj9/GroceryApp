import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import Subscription from '../components/Subscription'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='mt-10' >
      <Banner/>
      <Categories/>
      <BestSeller/>
      <BottomBanner/>
      <Subscription/>
    </div>
  )
}

export default Home
