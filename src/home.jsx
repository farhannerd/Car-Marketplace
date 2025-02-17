import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

const home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Category */}
      <Category />

      {/* Most Searched Cars */}
      <MostSearchedCar />

      {/* Information Section */}
      <InfoSection/>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default home
