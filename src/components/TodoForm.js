import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();

       addTodo(value);

       setValue("")
    }
        
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input'
            value={value}
            placeholder='Ingresa la tarea a realizar' 
            onChange={(e) => setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>Agregar tarea</button>
        </form>
    )
}