import API from 'todos-goals-api';

const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData=(todos, goals)=>{
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}

export const handleInitialData =()=>{
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([ todos, goals ]) => {
      dispatch(receiveData(todos, goals))
    })
  }
}