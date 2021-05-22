import React from 'react'
import { SiMatrix } from 'react-icons/si'

const Logo = () => {
  const logoClasses = {
    mainContainer: 'p-2',
    logoIcon: 'font-bold text-blue-600 text-2xl md:text-4xl'
  }

  return (
    <div className={logoClasses.mainContainer}>
      <div className={logoClasses.logoIcon}>
        <SiMatrix />
      </div>
    </div>
  )
}

export default Logo
