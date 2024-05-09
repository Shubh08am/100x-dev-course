import React from 'react'
import {  useDispatch , useSelector} from 'react-redux'
import { customReducer } from './Reducers';

export default function Home() {
  const dispatch = useDispatch();
  const value = useSelector(state=> state.customReducer)

  const addBtn = ()=>{
    dispatch({
        type:"increement"
    });
  }
  const addBtn25 = ()=>{
    dispatch({
        type:"increementByValue",
        payload : 25
    });
  }
  const subBtn = ()=>{
    dispatch({
        type:"decreement"
    })
  }

  return (
    <div>
        <h2>{value}</h2>
        <button onClick={addBtn}>increement</button>
        <button onClick={addBtn25}>increement by value 25</button>
        <button onClick={subBtn}>decreement</button>
    </div>
    
  )
}
