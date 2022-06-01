import React from 'react'
import ToDoList from "./ToDoList";


function App() {
    return (
     <>
         <ToDoList />
         <input type="text"/>
         <button>Add Todo</button>
         <button>Clear Completed Todos</button>
         <div>0 left to do</div>
     </>
    )
}

export default App
