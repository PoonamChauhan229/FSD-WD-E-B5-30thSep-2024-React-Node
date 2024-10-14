import { useState } from "react"
import { Parent02 } from "./Parent02"
import { UserContext } from "../utils/UserContext"

export const UseMainParent01=()=>{
    const[user,setUser]=useState("Indu") //Indu >> Anjali
    return (
    <>
        <UserContext.Provider value={[user,setUser]}>
            <h1>UseMainParent-UseContext Hook</h1>
            <input type="text" name="" id="" value={user}
            onChange={(e)=>{setUser(e.target.value)}}
            />
            <Parent02/>
        </UserContext.Provider>
    </>
    )
}

// MainParent
// Parent
// Child
// NewBorn 

//UseContext() >> ContextAPI

// createContext()