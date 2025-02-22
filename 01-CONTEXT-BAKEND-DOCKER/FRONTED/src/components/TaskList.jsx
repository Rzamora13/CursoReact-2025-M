import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskList = () => {
    const { tasks, deleteTask, completeTask, editTask } = useContext (TaskContext)

  return (
    <div className='p-4 mt-10 bg-gray-300 rounded-lg shadow-md'>
        <h2 className='text-xl font-bold mb-4'>Lista de Tareas</h2>
        {tasks.length === 0 && (<p className='text-xl text-gray-800'>No hay tareas</p>)}
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className='flex justify-between items-center p-2 mb-2 bg-white rounded-md shadow-md'>
                    <span className={`flex-1 ${task.completed ? "line-through text-gray-600" : ""}`}>{task.title}</span>
                    <button className='px-4 py-1 bg-blue-500 text-white rounded mr-2' onClick={() => completeTask(task.id)}>Completar</button>
                    <button className='px-4 py-1 bg-red-500 text-white rounded mr-2' onClick={() => deleteTask(task.id)}>Eliminar</button>
                    <button className='px-4 py-1 bg-yellow-500 text-white rounded' onClick={() => editTask(task.id, task)}>Editar</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TaskList