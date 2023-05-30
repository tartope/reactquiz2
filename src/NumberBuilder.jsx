import React, { useState} from "react";

export const NumberBuilder = () => {
    let [count, setCount] = useState(0);
    let [numString, setNumString] = useState("");

    const handleAddNum = ()=>{
        setCount(++count);
        setNumString(numString + count);
    }

    const handleReset = ()=>{
        setCount(0);
        setNumString("");
    }

    return (
        <>
            <button onClick={()=> handleAddNum()}>Add Number</button>
            <button onClick={()=> handleReset()}>Reset</button>
            <br></br>
            Numbers: {numString}
        </>
    )
}