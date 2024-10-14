import { useState } from "react"

import {Parent02} from './Parent02'
export const MainParent01=()=>{
    const [ancestorName,setAncestorName]=useState("Guvi Geek")
    return (
        <>
        <h1>MainParent</h1>
        <Parent02 ancestorName={ancestorName} setAncestorName={setAncestorName}/>
        </>
    )
}

// MainParent
// Parent
// Child
// NewBorn 