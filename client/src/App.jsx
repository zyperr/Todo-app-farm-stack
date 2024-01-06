import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import TaskForm from './pages/TaskForm'
import Header from './components/Header'
import { CompletedTasks} from './pages/CompletedTasks'
import { deleteOneTask, completeTask,getAllTasks } from './api/apiCalls'
import { Error404 } from './pages/Error404'
function App() {
  const [task, setTask] = useState([])

  useEffect(() => {
    async function fetchTask() {
      const tasks = await getAllTasks()
      setTask(tasks)
    }
    fetchTask()
  })
  const handleDelete = async (id) => {
    await deleteOneTask(id,setTask)
  }
  const handleCheck = async (id,completed) => {
    await completeTask(id,setTask,completed)
  }
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage task={task} handleDelete={handleDelete} handleCheck={handleCheck}/>}/>
        <Route path='/task/new' element={<TaskForm/>}/>
        <Route path='/task/edit/:id' element={<TaskForm/>}/>
        <Route path='/task/completed' element={<CompletedTasks onDelete={handleDelete} onCheck={handleCheck} task={task} />}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App