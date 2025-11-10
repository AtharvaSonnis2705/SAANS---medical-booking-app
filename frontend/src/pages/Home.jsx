import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import MentalHealthPrompt from '../components/MentalHealthPrompt'

const Home = () => {
  return (
    <div>
      <Header />
      <TopDoctors />
      <MentalHealthPrompt/>
      <SpecialityMenu />
      <Banner />
    </div>
  )
}

export default Home