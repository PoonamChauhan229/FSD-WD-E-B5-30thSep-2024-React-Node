
import './App.css'
import TestCode from './Components/TestCode'
function App() {
  let name="Anjali"// own name
  return (
    <div>
      <TestCode  lname={"Geek"} fname={"Pvt Ltd"}/>
      {/* {TestCode()} */}
      <TestCode lname={"Harish"} fname={"xyz"}></TestCode>
      <h1>Hello World</h1>
      <h1>Hello {name}</h1>
      <h1>---------------</h1>

      {console.log(1)}
    </div>
  )
}

export default App
