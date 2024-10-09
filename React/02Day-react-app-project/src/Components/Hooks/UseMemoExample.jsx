import { useMemo, useState } from "react"

const UseMemoExample=()=>{
    // performance optimization purpose 
    // returned memomized value
    const [count,setCount]=useState(1)
    const [item,setItem]=useState(20)

// const time=()=>{
//     console.log("Time is called")
//     return (100*count)
// }
const newTimer=useMemo(()=>{
    console.log("Timer is rendering")
    return (100*count)// count >> memoized value 
},[count])

    return(
        <>
            <h1>useMemo Count-{count}</h1>
            <h1>useMemo Item-{item}</h1>
            {/* <h4> {time()}</h4> */}
            <h4> {newTimer}</h4> 
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setItem(item+1)}>Update Item</button>
        </>
    )
}
export default UseMemoExample