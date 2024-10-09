import { useState } from "react";// named import

export const UseStateExample=()=>{
    // in javacsript
    // let like=0;
    // let disLike=0;
    //onclick >> eventlistener
    const[like,setLike]=useState(100)

    return(
        <div className="btnLikeDisLike">
            <h1>UseState Hook</h1>

            <p>👍{like}</p>

            <button onClick={()=>{
               setLike(like+1)
            }}>Increment</button>


            <button onClick={()=>{               
               setLike(like-1)
            }}
            >Decrement</button>              
        </div>
    )
}
