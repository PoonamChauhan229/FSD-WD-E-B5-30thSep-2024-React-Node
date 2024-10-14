export const NewBorn04=({ancestorName,setAncestorName})=>{
    return (
        <>
            <h1>{ancestorName}</h1>
            <button onClick={()=>setAncestorName("Guvi Geek Pvt Ltd")}>Update Name</button>
        </>
    )
}