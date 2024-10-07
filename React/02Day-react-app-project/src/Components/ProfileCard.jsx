import { BtnCounter } from "./BtnCounter"

function ProfileCard({profilepic,name}){// destructing over the fly
    // const {profilepic,name}=props
    return(
        <div className="card">
            <img className="profileimg" src={profilepic} height={100} width={150}/>
            <h3>Name: {name}</h3>
            <BtnCounter/>
        </div>
    )
}
export default ProfileCard

// destructuring concepts 
// const {keynames}=objName

// Map in this application  >>> 
// array >>
// works one each and every element
// arr.map((element,index)=>element)
// Test it right now 

//Spread operator > {... obj}
