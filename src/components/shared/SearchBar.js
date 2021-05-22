import React from 'react'

import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
  const searchBarClasses = {
    mainContainer: 'relative flex items-center',
    searchInput: 'w-full h-10 ml-5 mr-5 mt-1 pl-3 text-gray-500 rounded-md focus:outline-none',
    searchButton: 'fixed right-8 mt-1 text-lg text-gray-400 z-20 hover:text-gray-500'
  }

  return (
    <div className={searchBarClasses.mainContainer}>
      <input type="text" className={searchBarClasses.searchInput} placeholder="Search ..." />
      <BiSearch className={searchBarClasses.searchButton} />
    </div>
  )
}

export default SearchBar
