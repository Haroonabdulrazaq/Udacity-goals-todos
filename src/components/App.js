import React from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import ConnectTodos from "./Todos"
import ConnectGoals from "./Goals"
import './App.css';

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData())
    // store.subscribe(()=> this.forceUpdate());
  }

  render() {
    if(this.props.loading){
      return <h3>Loading...</h3>
    } 
    return(
      <div> 
        <ConnectTodos/>  
        <ConnectGoals />  
      </div>
    );
  }
}

export default connect((state)=>({
  loading: state.loading
}))(App);
