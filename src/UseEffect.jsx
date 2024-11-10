import { useEffect, useState } from "react"


function UseEffect(){
    // useEffect(()=>{
    //     console.log("Hello world")
    // },[])
    const [number,setNumber] = useState(10)
    const [number2,setNumber2] = useState(10)
    const increaseNumber = ()=>{
        setNumber(number + 1)
    }
    const increaseNumber2 = ()=>{
        setNumber2(number2 + 1)
    }
    useEffect(()=>{
        console.log("Hello world")
    },[number,number2])
    useEffect(()=>{
        console.log("Hello world")
    })

    return (
       <>
        <h1>{number}</h1>
        <button onClick={increaseNumber}>+</button>

        <h1>{number2}</h1>

        <button onClick={increaseNumber2}>+</button>
       </>
    )
}

export default UseEffect