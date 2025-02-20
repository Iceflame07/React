import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement,clear} from "../counterSlice/counterSlice";

const Counter = () =>{
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{count}</p>
            <div>
                <span>
                    <button onClick={()=> dispatch(increment())}>+</button>
                </span>
                <span><button onClick={()=>dispatch(decrement())}>-</button></span>
                <span><button onClick={()=>dispatch(clear())}>0</button></span>
            </div>
        </div>
    )
}

export default Counter