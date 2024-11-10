import { useState } from "react"


function About(){
    // const data = useState("Manish") // ["Manish",f()]
    // const name = data[0]
    // const functions = data[1]

    // const [name,setName] = useState("Manish")
    const [number,setNumber] = useState(10)
    const increaseNumber = ()=>{
        setNumber(number + 1)
    }

//     var number = 10 
//    const increaseNumber = ()=>{

//         number = number + 1
//         console.log(number)
//     }
    return (
       <>
        <h1>{number}</h1>
        <button onClick={increaseNumber}>+</button>
       </>

    )
}

export default About