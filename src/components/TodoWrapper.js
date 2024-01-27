import React, {useState} from 'react'
import { TodoForm } from './TodoForm'

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    return (
        <div className='TodoWrapper'>
            <TodoForm></TodoForm>
        </div>
    )
}