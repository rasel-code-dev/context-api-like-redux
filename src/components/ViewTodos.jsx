import React from 'react';
import "./ViewTodos.scss"

import connect from "../context/connect";

import { deleteTodo } from  "../context/actions"


const ViewTodos = (props) => {
// console.log("state from viewTodos", props)
  return (
      <div className="container">
      <div className="todo_view_component">
        <h4>All todos</h4>
        <ul className="todos">
          { props.todos && props.todos.map((todo, i)=> (
              <li className="todo" key={i}>
                <span>{todo.title}</span>
                <i className="fa fa-trash" onClick={()=> props.deleteTodo(todo.id)} />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default connect(ViewTodos, { deleteTodo })

