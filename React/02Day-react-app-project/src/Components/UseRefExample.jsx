import { useRef, useState } from "react"

const useRefExample=()=>{
    // useState() returns an array

    let inputRef=useRef(null) 
    console.log(inputRef) // returns an object >> {current:null}

    const[renderCount,setRenderCount]=useState(0)

    // directly modify the DOM
    // re-render wont happen 

    function controlInput(){
        inputRef.current.value="abc";
        inputRef.current.style.color="red";
        inputRef.current.focus()
        console.log("Input Function Called(UseRef)")
    }

    function incrementRenderCount(){
        console.log("Increment-UseState")
        setRenderCount(renderCount+1)
    }
    console.log("Component Rendered!!!")
    return(
        <>
            <h1>USE REF</h1>
            <input type="text" name="" id="" ref={inputRef}/>
            <button onClick={()=>controlInput()}>Handle Input</button>
            <button onClick={()=>incrementRenderCount()}>Trigger Re-render</button>
            <p>Count:{renderCount}</p>
        </>
    )
}

export default useRefExample