import React from 'react'

import { BsPeople, BsListCheck } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { VscTrash } from 'react-icons/vsc'

const EikeSquares = () => {
  const eikeSquaresClasses = {
    mainContainer: 'grid grid-cols-2 gap-2 mr-5 ml-5 mt-2',
    eikeSquare: 'col-span-1 items-top bg-blue-50 rounded-md w-full h-24 border-8 border-white shadow-sm',
    eikeContent: 'ml-2 mt-2',
    eikeImage: 'text-blue-600 text-3xl',
    eikeDefinition: 'text-gray-500 text-s font-bold',
  }

  return (
    <div className={eikeSquaresClasses.mainContainer}>
      <div className={eikeSquaresClasses.eikeSquare}>
        <div className={eikeSquaresClasses.eikeContent}>
          <div>
            <BsListCheck className={eikeSquaresClasses.eikeImage}/>
          </div>
          <div>
            <h5 className={eikeSquaresClasses.eikeDefinition}>Do first</h5>
          </div>
        </div>
      </div>
      <div className={eikeSquaresClasses.eikeSquare}>
        <div className={eikeSquaresClasses.eikeContent}>
          <div>
            <AiOutlineCalendar className={eikeSquaresClasses.eikeImage}/>
          </div>
          <div>
            <h5 className={eikeSquaresClasses.eikeDefinition}>Schedule</h5>
          </div>
        </div>
      </div>
      <div className={eikeSquaresClasses.eikeSquare}>
        <div className={eikeSquaresClasses.eikeContent}>
          <div>
            <BsPeople className={eikeSquaresClasses.eikeImage}/>
          </div>
          <div>
            <h5 className={eikeSquaresClasses.eikeDefinition}>Delegate</h5>
          </div>
        </div>
      </div>
      <div className={eikeSquaresClasses.eikeSquare}>
        <div className={eikeSquaresClasses.eikeContent}>
          <div>
            <VscTrash className={eikeSquaresClasses.eikeImage}/>
          </div>
          <div>
            <h5 className={eikeSquaresClasses.eikeDefinition}>Don't do</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EikeSquares
