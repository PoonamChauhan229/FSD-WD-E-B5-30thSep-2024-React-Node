import { useContext } from "react"
import { AncestorNameContext } from "../utils/AncestorNameContext"
import { UserContext } from "../utils/UserContext"

export const NewBorn04=()=>{
    const data=useContext(AncestorNameContext)
    const data1=useContext(UserContext)
    console.log(data)//
    return (
        <>
        <h1>NewBorn</h1>
        <h1>NewBorn-{data.ancestorName}</h1>
        <h2>{data1}</h2>
        </>
    )
}