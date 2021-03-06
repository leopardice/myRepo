import { useState } from 'react'
import Tasks from "./components/Tasks/Tasks";
import TaskForm from "./components/NewTask/TaskForm";

const DUMMY_TASKS = [
    {
        id: "e1",
        title: "buy food",
    },
    {
        id:"e2",
        title: "finish homework"
    }
]

function App() {
    const [tasks, setTasks] = useState(DUMMY_TASKS);

    const addTaskHandler = task => {
        setTasks(prevTasks => {
            return [task, ...prevTasks]
        })
    }

    const deleteTaskHandler = id => {
        setTasks(prevTasks => {
            return prevTasks.filter(task => task.id !== id)
         })
    }


    return (
      <div>
      <TaskForm onSaveTask={addTaskHandler}/>
      <Tasks tasks={tasks} onDeleteTask={deleteTaskHandler}/>
      </div>
  )
}

export default App
