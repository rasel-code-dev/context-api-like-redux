import React from "react";
import { MyContext } from "./connect";

/**
 * it just context Provider wrapper and extra function state shared that contains reactive state
 * */

function Provider(HOC){
  return function (props){
    
    const [state, setState] = React.useState(  {
      name: "Rasel Mahmud",
      todos: [{title: "Get up at 6'O Clock", id: 1}]
    })

    
    // it call when action function call dispatch function. from connect HOC component
    // so that out state globally updated
    function callback(updateState){
      setState(updateState)
    }
    
    return (
      <MyContext.Provider value={{...state, callback: callback }} >
        <HOC {...props} />
      </MyContext.Provider>
    )
  }
  
}
export default Provider
