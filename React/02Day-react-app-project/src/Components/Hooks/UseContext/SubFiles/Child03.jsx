import { useContext } from "react"
import { NewBorn04 } from "./NewBorn04"
import { AncestorNameContext } from "../utils/AncestorNameContext"


export const Child03=()=>{
    const data=useContext(AncestorNameContext)
    return (
        <>
        <h1>Child03-{data.ancestorName}</h1>
        <NewBorn04/>
        </>
    )
}