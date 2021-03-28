import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions'
import {v1 as uuid} from 'uuid'

function TodoInput() {
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [color, setColor] = useState('');
    let dispatch = useDispatch()
    let [todoid, setId] = useState('')
    
    

    return (
        <div>

            <div className='row m-2'>
                <input type='text' className = 'col form-control mx-2'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}  placeholder = 'Title' />

                    <input type = 'text' className = 'col form-control mx-2'
                    value={description}  
                    onChange={(e) => setDescription(e.target.value)} placeholder = 'Description'/>

                    <input type = 'text' className = 'col form-control mx-2' 
                    value={color}  
                    onChange={(e) => setColor(e.target.value)} placeholder = 'Color'/>
                <button className='btn btn-primary mx-2'
                    onClick={() => 
                     
                        dispatch(addTodo(
                      
                        {
                         
                            id: uuid(),
                            title: title,
                            description:description,
                            color:color

                        }
                    ),  setTitle(''),setDescription(''),setColor(''))
                    }>Add</button>
            </div>
        </div>
    )
}
export default TodoInput