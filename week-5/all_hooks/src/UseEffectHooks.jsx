import React , {useEffect, useState} from 'react'
import axios from "axios"

const UseEffectHooks = () => {

const [data , setData ] = useState("")
const [count, setCount] = useState(0)

useEffect(() => {
  axios
  .get("https://jsonplaceholder.typicode.com/comments")
  .then((response)=> {setData(response.data[0].email)
  console.log("API was called"); // it is called twice
  })

}, [count])



  return (
    <div>UseEffectHooks
<h1>{data}</h1>
<h1>{count}</h1>

<button onClick={() => {
  setCount(count + 1)
}}>Click here</button>

    </div>
    
  )
}

export default UseEffectHooks