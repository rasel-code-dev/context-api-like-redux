import React from 'react'

import './App.scss'

import connect from "./context/connect"
import ViewTodos from "./components/ViewTodos";
import AddTodo from "./components/AddTodo";
import {fetchUser, fetchPosts} from "./context/actions";


function App(props) {
  
  
  React.useEffect(()=>{
    props.fetchUser()
    props.fetchPosts()
  }, [])
  
  console.log("app", props)
  return (
    <div className="App">
        <ConnectedAnotherCom2/>
    </div>
  )
}



const AnotherCom2 = (props)=>{
  return (
      <div>
        <AddTodo/>
        <ViewTodos/>
      </div>
  )
}


const ConnectedAnotherCom2 = connect(AnotherCom2)

export default connect(App, { fetchUser, fetchPosts })
