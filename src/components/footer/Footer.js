import React from 'react'
import NewEikeButton from '../shared/NewEikeButton'

const Footer = () => {
  const footerClasses = {
    mainContainer: 'fixed w-full bottom-0 pb-1 bg-white flex items-center justify-center'
  }

  return (
    <footer className={footerClasses.mainContainer}>
      <NewEikeButton />
    </footer>
  )
}

export default Footer
