import React from 'react'
import { GrMenu } from 'react-icons/gr'

const Menu = () => {
  const menuClasses = {
    mainContainer: 'p-2',
    hamburgerMenu: 'font-bold text-blue-600 text-2xl md:text-4xl'
  }

  return (
    <div className={menuClasses.mainContainer}>
      <div className={menuClasses.hamburgerMenu}>
        <GrMenu />
      </div>
    </div>
  )
}

export default Menu
