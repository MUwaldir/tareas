import React, { useState , useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const { createTask } = useContext(TaskContext)

    const handleSUbmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            descripcion
        })
        setTitle('')
        setDescripcion('')

    }
  return (
    <div className='max-w-md mx-auto'>
        <form action="" onSubmit={handleSUbmit} className="bg-emerald-800 p-10 mb-4">
            <h1 className='text-2xl font-bold text-white mb-3 '>Crea tu Tarea</h1>
            <input type='' required value={title}  placeholder='escribe tu tarea'
            className='bg-slate-300 p-3 w-full mb-2'
            onChange={(e) => setTitle(e.target.value)} />
            <textarea name="" required
            className='bg-slate-300 p-3 w-full mb-2' value={descripcion} id="" cols="30" rows="5" placeholder='Escribe la descripcion de la tarea'onChange={(e) => setDescripcion(e.target.value)}  >
            </textarea>
            <button className='bg-indigo-500 px-3 py-1 rounded-md'>Guardar</button>
        </form>

    </div>
   
  )
}

export default TaskForm