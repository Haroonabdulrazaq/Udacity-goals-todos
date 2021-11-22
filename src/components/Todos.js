import React from 'react';
import {connect} from 'react-redux';
import List from "./Lists"

import { handleAddTodo, handleToggleTodo, handleDeleteTodo } from "../actions/todos";


class Todos extends React.Component {
  addItem=(e)=>{
    e.preventDefault();
    this.props.dispatch(handleAddTodo(
      this.input.value,
      ()=> this.input.value =''
    ))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }

  toggleTodo =(id)=>{
    this.props.dispatch(handleToggleTodo(id));
  }
  render(){
    return(
      <div>
        <h2>Todos</h2>
        <input type="text" placeholder="Add Todo" ref={(input)=> this.input = input} />
        <button onClick={this.addItem}>Add todo</button>
        <List toggleTodo={this.toggleTodo} removeItem={this.removeItem} items={this.props.todos} />
      </div>
    )
  }
}

export default connect((state)=>({
  todos: state.todos
}))(Todos)