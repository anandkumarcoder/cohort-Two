import { useState } from 'react'

/* let state = {
  count : 0
} */
function App() {
   const [count, setCount] = useState(0)

   const [todos , setTodos] = useState([{
title : "go to gym",
description : "go to gym from 7-9",
completed : false
   },{
    title : "study DSA",
description : "study DSA from 9-11",
completed : true
   },

   {
    title : "study DSA II",
description : "study DSA from 9-11",
completed : true
   }

   
  
  ])

  function addToDo () {
    setTodos([...todos, {
      title : "new task added",
      description : "new description added"
    }])
  }



/* 
Manually written state updation variable 
function clickHandler() {
  state.count = state.count + 1
  console.log(state.count);
 }*/
 

 
 
  return (
    <>
 {/* <CustomButton  count = {count}  setCount={setCount}/> */}

 <div>
  {/* {JSON.stringify(todos)} */}

{/*   <Todo title = {todos[0].title} description = {todos[0].description} />
  <Todo title = {todos[1].title} description = {todos[1].description} /> */}

  <button 
  onClick={addToDo}
  >Add a random todo</button>

  {todos.map(function (todo){
return <Todo title = {todo.title} description = {todo.description} />
  })}
 </div>
    </>
  )
}


// props is state as an input 
//function written for component 


/* function CustomButton(props) {
  function clickHandler() {
    props.setCount(props.count + 1)
   }

  return <button onClick={clickHandler}>
    counter {props.count}
  </button>
}
 */

// function written for toDo component 

function Todo (props){
  return <div>

    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
