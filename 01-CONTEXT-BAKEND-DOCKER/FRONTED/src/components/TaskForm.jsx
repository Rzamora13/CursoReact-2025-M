import { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import { v4 as uuidv4 } from 'uuidv4'

const TaskForm = () => {
    const { addTask } = useContext(TaskContext)
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim() !== ""){
            addTask({
                id: uuidv4(),
                title: input,
                completed: false,
            })
            setInput("") // limpiamos el input
        }
    }
  return (
    <form className='p-4 bg-gray-300 rounded-lg shadow-md' onSubmit = {handleSubmit}>
        <h2 className='text-xl font-bold mb-4'>Agregar Tarea</h2>
        <input 
        type="text"
        value={input}
        onChange={e=>setInput(e.target.value)}
        placeholder='Nombre de la tarea'
        className='w-full p-2 mb-4 border border-gray-300 rounded-md'
        />
        <button type='submit' className='px-4 py-2 bg-blue-500 hover:bg-blue-900 text-white'>Agregar</button>
    </form>
  )
}

export default TaskForm