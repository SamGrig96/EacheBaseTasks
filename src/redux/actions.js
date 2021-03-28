import axios from "axios"
import { todos } from './state'
export const ADD_TODO = 'ADD_TODO '
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const GET_ALL_LIST = 'GET_ALL_LIST'
export const GET_BY_ID = 'GET_BY_ID'



export function getById(){
    return function(dispatch){
        axios.get(`https://todo.eachbase.com/api/SamvelGrigoryan/todos/:todoId`).then(res=>{
            dispatch({
                type:GET_BY_ID,
                playload:res.data,
            })
        })
    }
}


export function getTodoList() {
    return function (dispatch) {
        axios.get('https://todo.eachbase.com/api/SamvelGrigoryan/todos').then(res => {
            dispatch({
                type: GET_ALL_LIST,
                playload: res.data
            })
        }
        )
    };
}

export function addTodo(todo) {

    let title = todo.title;
    let description = todo.description;
    let color = todo.color;
    return function (dispatch) {
        axios.post('https://todo.eachbase.com/api/SamvelGrigoryan/todos', { title, description, color }).then(res => {
            dispatch({
                type: ADD_TODO,
                playload: res.data
            })
        }
        )
    }
}


export function deleteTodo(todo) {
    return function (dispatch) {
        axios.delete(`https://todo.eachbase.com/api/SamvelGrigoryan/todos/${todo}`).then(res => {
            dispatch({
                type: DELETE_TODO,
                playload: todo,
            })
        })

    }
}

export function updateTodo(todo) {
    let title = todo.title;
    let description = todo.description;
    let color = todo.color;
    let id = todo._id
    return function (dispatch) {
        axios.patch(`https://todo.eachbase.com/api/SamvelGrigoryan/todos/${id}`, { title, description, color }).then(res => {
            dispatch({
                type: UPDATE_TODO,
                playload: res.data,
            })
        }


        )
    }



}