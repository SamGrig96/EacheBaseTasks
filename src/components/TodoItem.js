
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodo, updateTodo} from '../redux/actions'

function TodoItem({ todo, index }) {
    const [etitable, setEtable] = useState(false)
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)
    const [color, setColor] = useState(todo.color)
    let dispatch = useDispatch()


   

    return (
        <div>

            <div className='row mx-2 align-items-centre' >

                <div className='col' style={{ backgroundColor: todo.color }}>
                    {etitable ? <div className='row mx-2'> <input type='text'
                        className='col form-control mx-2'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                        <input type='text'
                            className='col form-control mx-2'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                        <input type='text'
                            className='col form-control mx-2'
                            value={color}
                            onChange={(e) => setColor(e.target.value)} />
                    </div> : <h4>  {index + 1} ---------{todo.title} ----- {todo.description}</h4>}



                </div>
                <button className='btn btn-primary m-2'
                    onClick={() => {
                        setEtable(!etitable)
                        if (etitable) {
                            dispatch(updateTodo({
                                ...todo,
                                title: title,
                                description: description,
                                color: color,
                                id: todo._id,
                            }

                            ))
                        }


                    }}
                >Edit</button>
                <button className='btn btn-danger m-2'
                    onClick={() => dispatch(deleteTodo(todo._id))}
                >Delete</button>
               
            </div>

        </div>
    )
}
export default TodoItem