import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
  const header_classes = {
    mainContainer: 'flex items-center justify-between p-1 md:p-3 mb-1 bg-white border-b border-gray-100'
  }

  return (
    <div className={header_classes.mainContainer}>
      <Menu />
      <Logo />
    </div>
  )
}

export default Header
