
import { ADD_TODO, UPDATE_TODO, DELETE_TODO,GET_ALL_LIST,GET_BY_ID} from './actions.js'
import { todos } from './state'

export let reducers = (state = todos, action) => {

  let newTodos;

  switch (action.type) {
    case GET_BY_ID:
      newTodos=[...state];
      newTodos=[...action.playload]
      return newTodos
    case GET_ALL_LIST:
      newTodos = [...state];
      newTodos=[...action.playload]
      return newTodos
      case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.playload)
      return newTodos
      case DELETE_TODO:
        newTodos = [...state];
        newTodos = newTodos.filter(todo => todo._id != action.playload);
        return newTodos;
        case UPDATE_TODO:
          newTodos = [...state];
          let index = -1
          for (let i = 0; i < newTodos.length; i++) {
            index++;
            if (newTodos[i]._id == action.playload._id)
            break
          }
          if (index != -1) {
            newTodos[index] = action.playload;
          }
          return newTodos
          break

  }
  return state
}


