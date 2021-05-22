import React from 'react'

const NewEikeButton = () => {
  const newEikeButtonClasses = {
    mainContainer: '',
    button: 'rounded-full border-gray-100 border-4 h-12 md:h-20 w-12 md:w-20 bg-blue-600 text-white text-3xl font-bold'
  }

  return (
    <div className={newEikeButtonClasses.mainContainer}>
      <button className={newEikeButtonClasses.button}>+</button>
    </div>
  )
}

export default NewEikeButton
