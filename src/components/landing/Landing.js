import React from 'react'

import EikeSquares from './EikeSquares'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import SearchBar from '../shared/SearchBar'
import MyLists from '../shared/MyLists'

const Landing = () => {
  const landingClasses = {
    mainContainer: 'w-full'
  }

  return (
    <div className={landingClasses.mainContainer}>
      <Header />
      <SearchBar />
      <EikeSquares />
      <MyLists />
      <Footer />
    </div>
  )
}

export default Landing
