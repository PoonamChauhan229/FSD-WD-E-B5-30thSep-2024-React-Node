import { Child03 } from "./Child03"

export const Parent02=({ancestorName,setAncestorName})=>{
    return (
        <>
        <Child03 ancestorName={ancestorName} setAncestorName={setAncestorName}/>
        </>
    )
}