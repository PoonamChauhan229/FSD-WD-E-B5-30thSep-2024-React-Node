import { useEffect, useState } from "react"

export const TodosAPI=()=>{
    const [val,setVal]=useState(true)
    const [postval,setPostval]=useState([])
    // https://jsonplaceholder.typicode.com/posts

    // fetch()
    //we have to create async and await function
    const getTodosData=async()=>{
        let res=await fetch("https://jsonplaceholder.typicode.com/posts")
        let data=await res.json()
        console.log(data)//[{},{}]
        setPostval(data)
    }
   
    // for API call >>  best way useEffect()
    //dont put an dependancy array  >> keeps on running again and again
    // useEffect(()=>{
    //     console.log('Effect runs after every render');
    //     getTodosData()
    // })

    //empty dependancy array  >> intial render 
    useEffect(()=>{        
        getTodosData()
    },[])

    // initial render + whenever state variable changes + with dependancy
    // useEffect(()=>{
    //     getTodosData()
    // },[val])

    return(
        <>
            <button onClick={()=>setVal(!val)}>Set</button>
            <h1>Heelo World</h1>
            <p>
                {
                    postval.map((element,index)=><p key={index}>Title-{element.title} </p>)
                }
            </p>
        </>
    )
}

//1. useEffect with No Dependencies (Runs After Every Render)
//2. useEffect with Empty Dependency Array (Runs Only Once on Mount)
//3. useEffect with Specific Dependencies (Runs When Dependencies Change)

// TodosAPI.jsx:38 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `TodosAPI`. See https://reactjs.org/link/warning-keys for more information.
//     at p
//     at TodosAPI (http://localhost:5173/src/Components/TodosAPI.jsx?t=1728023960710:21:25)
//     at div
//     at App

// Virtual DOM >> React Feature 