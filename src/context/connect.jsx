import React, {useContext} from "react";

const defaultValue = {name: "rasel"}
export const MyContext = React.createContext(defaultValue);


function connect(HOC, actions){
  return function (props){
    
    let state = useContext(MyContext)
    
    function actionsFn(){
      return recursiveFunction()
    }
    
    function recursiveFunction(){
      let m = {}
      for (const funcName in actions) {
        m[funcName] = function (payload) {
          const nestedActionFn = actions[funcName](payload)
          nestedActionFn(dispatch, {...state})
        }
      }
  
      // return function of modified version
      // that return with dispatch, and state inside actions
      return m
    }
    
    
    function dispatch(data){
      return state.callback(data)
    }
    
    return (
      <MyContext.Consumer>
        { (value=> {
          return (
            <HOC {...props} {...value} {...actionsFn()}  />
          )
        })
        }
      </MyContext.Consumer>
    )
  }
}


export default connect