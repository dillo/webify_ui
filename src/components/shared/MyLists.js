import React from 'react'

import { BsListUl } from 'react-icons/bs'
import { MdAddCircle } from 'react-icons/md'

const MyLists = () => {
  const myListsClasses = {
    mainContainer: 'bg-white rounded-md ml-5 mr-5 mt-2 p-2',
    header: 'flex items-center justify-between pb-2 border-1 border-b border-gray-100',
    title: 'flex-1 w-full text-gray-500 text-s font-bold',
    newListIcon: 'flex-end mr-1 text-blue-600 text-2xl',
    link: 'flex-end text-xs text-blue-600 font-bold',
    listContainer: 'mt-2 pb-2',
    list: 'flex items-center mb-1 border-1 border-b border-gray-50 text-gray-500 text-s font-light',
    icon: 'mr-2 text-blue-600'
  }

  return (
    <div className={myListsClasses.mainContainer}>
      <div className={myListsClasses.header}>
        <h1 className={myListsClasses.title}>Activity list</h1>
        <MdAddCircle className={myListsClasses.newListIcon}/>
        <h1 className={myListsClasses.link}>Add activity</h1>
      </div>
      <div className={myListsClasses.listContainer}>
        <div className={myListsClasses.list}>
          <BsListUl className={myListsClasses.icon}/>
          <p>Plan some activity</p>
        </div>
        <div className={myListsClasses.list}>
          <BsListUl className={myListsClasses.icon}/>
          <p>Work related project</p>
        </div>
        <div className={myListsClasses.list}>
          <BsListUl className={myListsClasses.icon}/>
          <p>Workout routine items</p>
        </div>
        <div className={myListsClasses.list}>
          <BsListUl className={myListsClasses.icon}/>
          <p>Read up on some topic</p>
        </div>
        <div className={myListsClasses.list}>
          <BsListUl className={myListsClasses.icon}/>
          <p>Plan deck rebuild</p>
        </div>
        <div className={myListsClasses.list}>
          <BsListUl className={myListsClasses.icon}/>
          <p>Garage remodelling plans</p>
        </div>
      </div>
    </div>
  )
}

export default MyLists
