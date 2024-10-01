function TestCode(props){
    //props :Object
    console.log(props) //{lname: 'Geek',fname:"Pvt Ltd"}
    const time=30
    const name="Guvi"
    // Geek
    return(
        <>
            <h1>My First Component</h1>
            <h4>Time Taken to complete-{time*2} by {name} {props.lname} {props.fname}</h4>
        </>
    )
}

export default TestCode;

// Props >> Properties 

{/* <TestCode/> || //self closing tag

// tag
// attribute =abtvalue */}

// Prop Drilling
    // >> 