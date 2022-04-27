import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect} from "react";
import Users from "./Users";
import {createAdd} from './store/Slicer/counter';
import { createPeople } from "./store/Slicer/people";
export default function App() {
  const [mard,setMard]=useState('');
  const dispatch=useDispatch();
  const people=useSelector((state)=>state.People)
  const data=useSelector(state=>state.fetch);
 
  useEffect(()=>{
    if(mard){
      dispatch(createPeople(mard))
    }

  },[mard])
console.log(people);
  return (
    <>
 
 <button onClick={()=>setMard(prompt())}>add</button>
{people.length!==0 ? people.map(i=>(
  <h2 key={i.id}>{i.name}</h2> ))  : null}
  {!data.loading ? data.user.map(i=>(
    <h2>{i.name}</h2>
  )) : null}
    </>
  )
}
