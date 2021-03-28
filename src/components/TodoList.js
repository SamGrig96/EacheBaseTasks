import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo ,getTodoList} from '../redux/actions'
import { todos } from '../redux/state'
import TodoItem from './TodoItem'
import { useEffect } from 'react'
import axios from 'axios'

function TodoList() {
    let todos = useSelector(state => state)
    let dispatch = useDispatch()
 



 useEffect(() => {
    dispatch(getTodoList())
}, []);

    return (
      

        <div className = 'my-4'>
            {
                todos.map((todo,index)=>{
                    
                   
                    return(<TodoItem key={todo._id} todo={todo} index={index} />)
                })
            }
           
        </div>
        
    )
}
export default TodoList