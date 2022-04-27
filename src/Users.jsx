import React,{useState} from 'react';
import  {useSelector,useDispatch} from 'react-redux'
import { addUsers } from './store/Slicer/user';
export default function Users() {
    const users=useSelector(state=>state.Users);
    const [val,setVal]=useState('')
    const dispatch=useDispatch()
    console.log(users);
  return (
    <div>
        <input type='text' onChange={e=>setVal(e.target.value)}/>
        <button onClick={()=>dispatch(addUsers(val))}></button>
    </div>
  )
}
