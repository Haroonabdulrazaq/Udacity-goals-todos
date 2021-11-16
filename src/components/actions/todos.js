import API from 'goals-todos-api';

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO= "TOGGLE_TODO";

const addTodo = (todo)=>{
  return {
   type: ADD_TODO,
    todo
  }
}
const removeTodo = (id)=>{
  return {
   type: REMOVE_TODO,
    id
  }
}
const toggleTodo = (id)=>{
  return {
   type: TOGGLE_TODO,
    id
  }
}

export const handleAddTodo =(name, cb)=> {
  return (dispatch) => {
    return API.saveTodo(name)
        .then(todo => {
          dispatch(addTodo(todo))
          cb()
        }).catch(err=> {
          console.log(err);
        })
  }
}

export const handleDeleteTodo= (todo)=> {
    return (dispatch) => {
      dispatch(removeTodo(todo.id))

      return API.deleteTodo(todo.id)
        .catch(() => {
          dispatch(addTodo(todo))
          alert('An error occurred. Try again.')
        })
    }
}

export const handleToggleTodo = (id)=> {
  return (dispatch) => {
    dispatch(toggleTodo(id))
    return API.saveTodoToggle(id)
        .catch(()=>{
          dispatch(toggleTodo(id));
          return alert("Error Occured and refused to toggle")
        })
  }
}