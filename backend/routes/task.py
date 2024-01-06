from database import get_all_tasks,create_task,update_task,delete_task,get_one_task_id,get_by_title
from fastapi import APIRouter,HTTPException
from models.model import Task,UpdateTask

task = APIRouter()
@task.get("/api/tasks")
async def get_tasks():
    tasks = await get_all_tasks()
    return tasks

@task.get("/api/tasks/{id}",response_model=Task)
async def get_task(id : str):
    task = await get_one_task_id(id)
    if task:
        return task
    raise HTTPException(detail=f"Task '{id}' not found",status_code=404)


@task.post("/api/tasks",response_model=Task)
async def save_task(task:Task):
    task_found = await get_by_title(task.title)
    if task_found:
        raise HTTPException(status_code=409, detail="Task already exists")
    response = await create_task(task.dict())
    if response:
        print(response)
        return response
    raise HTTPException(status_code=400, detail="Something went wrong")



@task.put("/api/tasks/{id}",response_model=Task)
async def put_task(id:str,task:UpdateTask):
    response = await update_task(id,task)
    if response:
        return response
    return HTTPException(404, detail=f"Task '{id}' not found")

@task.delete("/api/tasks/{id}")
async def remove_task(id:str):
    response = await delete_task(id)
    if response:
        return "sucessfully deleted"
    raise HTTPException(detail=f"Task '{id}' not found",status_code=404)
