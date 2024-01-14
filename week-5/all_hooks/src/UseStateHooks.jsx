import React from 'react'
import { useState } from 'react'


const UseStateHooks = () => {
// example - 1

  //   const [count, setCount] = useState(5)

// const increment = () => {

//   setCount(count + 1)
// }
// -------


// example 2

const [inputValue, setInputValue] = useState("Abc")


let onChange = (e) => {

  const newValue = e.target.value
  
  setInputValue( newValue)
}

  return (
    <div>
      {/* <button onClick={increment}>increment {count}</button> */}
      <input type="text" onChange={onChange} /> {inputValue}
    </div>
  )
}

export default UseStateHooks