import { useState } from "react";// named import

export const BtnCounter=()=>{
    // in javacsript
    // let like=0;
    // let disLike=0;
    //onclick >> eventlistener
    const[like,setLike]=useState(0)
    const[disLike,setDislike]=useState(0)

    return(
        <div className="btnLikeDisLike">
            <button onClick={()=>{
                //like++
                //like=like+1
               setLike(like+1)
            }}>👍<span className="like">{like}</span></button>


            <button onClick={()=>{               
               setDislike(disLike+1)
            }}
            >👎<span className="dislike">{disLike}</span></button>              
        </div>
    )
}
