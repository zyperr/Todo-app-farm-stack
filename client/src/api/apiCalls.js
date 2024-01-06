

const URL = "http://localhost:8000"
const ENDPOINT = `${URL}/api/tasks`

const headers = {
    "Content-Type": "application/json"
}
const getAllTasks = async () => {
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    return data
}
const getOneTask = async (id) => {
    const res = await fetch(`${ENDPOINT}/${id}`)
    const data = res.json()
    return data
} 
const deleteOneTask = async (id,setTask) => {
    const res = await fetch(`${ENDPOINT}/${id}`,{
        method: "DELETE"
    })
    if (res.status === 200) {
        setTask(prevTask => prevTask.filter(task => task._id !== id))
    }
} 

const updateOneTask = async (id,title,description) => {
    const res = await fetch(`${ENDPOINT}/${id}`,{
        method: "PUT",
        headers: headers,
        body:JSON.stringify({
            title,
            description
          })
    }) 
    return res.status
}
const completeTask = async (id,setTask,completed) => {
    const res = await fetch(`${ENDPOINT}/${id}`,{
        method: "PUT",
        headers: headers,
        body:JSON.stringify({
            completed: !completed
        })
    })
    if(res.status === 200){
        setTask(prevTask => prevTask.map(task => {
            if(task._id === id){
                task.completed = !completed
            }
            console.log(task)
            return task
        }))
    }
}
const createOneTask = async (title,description) => {
    const res = await fetch(ENDPOINT,{
        method: "POST",
        headers: headers,
        body:JSON.stringify({
            title,
            description
          })
    })
    return res
}


export {
    getAllTasks,
    deleteOneTask,
    updateOneTask,
    createOneTask,
    getOneTask,
    completeTask
}