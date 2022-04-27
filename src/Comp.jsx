import React,{useReducer,useState} from 'react'
import Reducer from './reducer'
export default function Comp() {
    const [state,dispatch] = useReducer(Reducer,[])
    const [value,setValue] = useState('')
    
  return (
      <>
       <input type="text" onChange={(e)=>setValue(e.target.value)}/>
       <button onClick={()=>dispatch({
           type:'caxik',
           payload:value
       })}>Show</button>

       <button onClick={()=>dispatch({
           type:'clear',
       })}>delete</button>
    {state}
      </>
  
  )
}
