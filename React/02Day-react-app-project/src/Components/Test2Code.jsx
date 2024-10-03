import TestCode from './TestCode'

const Test2Code = () => {
    let name="Anjali"// own name
  return (
    <>
     <TestCode  lname={"Geek"} fname={"Pvt Ltd"}/>
      {/* {TestCode()} */}
     <TestCode lname={"Harish"} fname={"xyz"}></TestCode>
      <h1>Hello World</h1>
      <h1>Hello {name}</h1>
      <h1>---------------</h1>

      {console.log(1)}
    
    </>
  )
}

export default Test2Code