import React, {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();

        console.log(value)
    }
        
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input'
            placeholder='Ingresa la tarea a realizar' 
            onChange={(e) => setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>Agregar tarea</button>
        </form>
    )
}