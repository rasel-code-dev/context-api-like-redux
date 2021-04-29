


export const deleteTodo = (todoId)=>{
  return function (dispatch, state){
    // console.log(dispatch, oldState)
    // console.log(dispatch())
    let updateState = {
      ...state, todos: state.todos.filter(t=>t.id !== todoId)
    }
    dispatch(updateState)
  }
}


export function addTodo(newTodo){
  return function (dispatch, state){
    dispatch({...state, todos: [...state.todos, newTodo]  })
  }
}