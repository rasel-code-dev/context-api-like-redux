
{}

let lastUpdatedState = {} // store updated state... [important]
export const deleteTodo = (todoId)=>{
  return function (dispatch, state){
    // console.log(dispatch, oldState)
    // console.log(dispatch())
    lastUpdatedState = dispatch({
      ...state,
      ...lastUpdatedState,
      todos: state.todos.filter(t=>t.id !== todoId)
    })
  }
}

export function addTodo(newTodo){
  return function (dispatch, state){
    lastUpdatedState = dispatch({
      ...state,
      ...lastUpdatedState,
      todos: [...state.todos, newTodo]
    })
  }
}
export function fetchUser(){
  return function (dispatch, state){
    setTimeout(()=>{
      lastUpdatedState = dispatch({
        ...state, ...lastUpdatedState, users: [{name: "Rasel"}, {name: "raju"}]
      })
    }, 10)
  }
}
export function fetchPosts(){
  return function (dispatch, state){
    setTimeout(()=>{
      lastUpdatedState = dispatch({
        ...state, ...lastUpdatedState, posts: [{title: "Post One"}, {title: "Post Two"}]
      })
    }, 3000)
  }
}
