import React, {useContext} from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskTitle() {
    const {tasks} = useContext(TaskContext)
    return (
        <div className='bg-blue-600 rounded flex flex-col justify-center text-center text-white text-lg font-bold h-20'>
            <h1 className='text-2xl'>Aplicación de Gestión de Tareas</h1>
            <h2>Tienes <span className='bg-red-500 btn rounded item-center px-2 '> <strong className='text-center mx-auto'>{tasks.length}</strong> </span>   Tareas</h2>
        </div>
        
    )
}

export default TaskTitle
