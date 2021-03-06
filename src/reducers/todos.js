import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todos';
import { RECEIVE_DATA } from '../actions/shared';

function todos(state=[], action){
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo])
    case REMOVE_TODO:
      const newTodos = state.filter(todo => todo.id !== action.id)
      return newTodos
    case TOGGLE_TODO:
      return state.map(todo => todo.id !== action.id? todo : 
        Object.assign({}, todo, { completed: !todo.completed }));
    case RECEIVE_DATA:
      return action.todos
    default:
      return state;
  }
}

export default todos;