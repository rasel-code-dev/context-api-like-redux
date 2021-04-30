import React from 'react';

import "./AddTodo.scss"

import connect from "../context/connect";
import {addTodo} from "../context/actions";

const AddTodo = (props) => {
  
  const [title, setTitle] = React.useState("")
  
  function addTodoHandler(e){
    props.addTodo({id: Date.now(), title, isComplete: false})
    setTitle("")
  }
  
  return (
      <div className="container">
        <div className="addTodo_component">
          <input type="text"
             value={title}
             placeholder="Enter Todo Name"
             onChange={(e)=>setTitle(e.target.value)}/>
          <button onClick={addTodoHandler} type="button" >Add</button>
        </div>
    </div>
  );
};

export default connect(AddTodo, { addTodo });

