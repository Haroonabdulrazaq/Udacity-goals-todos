import API from 'goals-todos-api';

export const ADD_GOAL= "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

const addGoalAction = (goal)=>{
  return {
   type: ADD_GOAL,
    goal
  }
}
const removeGoal = (id)=>{
  return {
   type: REMOVE_GOAL,
    id
  }
}


export function handleAddGoal(name, cb) {
  return (dispatch)=>{
    return API.saveGoal(name)
      .then(goal => {
        dispatch(addGoalAction(goal))
        cb()
      }).catch(err=> {
        console.log(err);
        alert("There was an Error!");
      })
  }
}

export function handleDeleteGoal(goal) {
return (dispatch)=>{
 dispatch(removeGoal(goal.id));

  return API.deleteGoal(goal.id)
    .catch(()=>{
      dispatch(addGoalAction(goal))
      return alert("An error Occured to remove goal, Try again")
    })
}
}