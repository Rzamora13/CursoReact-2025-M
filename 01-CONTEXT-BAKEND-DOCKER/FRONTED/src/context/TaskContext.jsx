// import
import { createContext, useEffect, useState } from "react";

//Crear el contexto
export const TaskContext = createContext();

//Crear el provider del contexto
export const TaskProvider = ({ children }) => {
    /**
     * task = {
     *  id: 1,
     *  title: 'Tarea 1',
     *  completed: false      
     * }
     */

    //HOOKS
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    })

    useEffect(() => {
        //Guardar en el localStorage
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])
    

    /**
     * Acciones que puedo realizar con las tareas:
     * 1. Crear una tarea
     * 2. Eliminar una tarea
     * 3. Completar una tarea
     * 4. Editar una tarea
     */

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    }

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }

    const completeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task));
    }

    const editTask = (taskId, updatedTask) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? updatedTask : task));
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask, completeTask, editTask}}>
            {children}
        </TaskContext.Provider>
    );
}