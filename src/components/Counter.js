import React, {useState} from "react";

export default function Counter (){
    const [count,setCount]= useState(0);
    const [countMax]= useState(20);
    const [countMin]= useState(-40);

    function decrement(){
        if(count>countMin) {
            setCount(count - 1);
        }
    }
    function increment(){
        if(count<countMax) {
            setCount(count+1);
        }
    }
    return (
        <>
            <div>Count {count}</div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}