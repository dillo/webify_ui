import React from 'react'

const NewTodo = () => {
  const newTodoClasses = {
    mainContainer: 'flex items-center',
    backgroundPanel: 'flex bg-white rounded shadow-sm',
    span: 'flex items-center text-gray-700',
    formInput: 'rounded w-full bg-purple-white leading-tigh focus:none focus:outline-none text-gray-700',
    formButton: 'bg-blue-600 hover:bg-blue-700 rounded text-white',
    buttonText: '',
    placeHolder: 'Enter todo ...'
  }

  return (
    <div className={newTodoClasses.mainContainer}>
      <div className={newTodoClasses.backgroundPanel}>
        <span className={newTodoClasses.span}></span>
        <input className={newTodoClasses.formInput} type="text" placeholder={newTodoClasses.placeHolder} />
        <button className={newTodoClasses.formButton}>
          <p className={newTodoClasses.buttonText}>Create</p>
        </button>
      </div>
    </div>
  )
}

export default NewTodo
