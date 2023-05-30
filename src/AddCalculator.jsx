import React, { useState } from "react";

export const AddCalculator = () => {
    let [count, setCount] = useState(0);
    let [total, setTotal] = useState(0);
    console.log(count);

    const handleAdd = (num)=>{
        setCount(count + num);
        setTotal(count);
    }

    return (
        <>
            <button onClick={()=> handleAdd(1)}>Add 1</button>
            <button onClick={()=> handleAdd(2)}>Add 2</button>
            <button onClick={()=> handleAdd(3)}>Add 3</button>
            <br></br>
            Total: {count}
        </>
    )
}