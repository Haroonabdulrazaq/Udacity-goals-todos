import React from 'react';
import { connect } from 'react-redux'
import List from "./Lists";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals"

class Goals extends React.Component {
  addItem=(e)=>{
    e.preventDefault();

    this.props.dispatch(handleAddGoal(
      this.input.value,
      ()=> this.input.value=''
    ))
  }

  removeItem=(goal) =>{
    this.props.dispatch(handleDeleteGoal(goal));
  }
  render(){
    return(
      <div>
        <h2>Goals</h2>
        <input type="text" placeholder="Add Goal" ref={(input)=> this.input = input} />
        <button onClick={this.addItem}>Add goal</button>
        <List removeItem={this.removeItem} items ={this.props.goals}/> 
      </div>
    )
  }
}

export default connect((state)=>({
  goals: state.goals
}))(Goals)