
import './App.css'
import ProfilePropsDisplay from './Components/ProfilePropsDisplay'
import Test2Code from './Components/Test2Code'
import ProfileMapDisplay from './Components/ProfileMapDisplay'
import ProfileSpreadMapDisplay from './Components/ProfileSpreadMapDisplay'
import {BtnCounter} from './Components/BtnCounter'
import { TodosAPI } from './Components/TodosAPI'
import UseRefExample from './Components/Hooks/UseRefExample'
import UseMemoExample from './Components/Hooks/UseMemoExample'
import { BasicForm } from './Components/BasicForm'
import { UseReducerExample } from './Components/Hooks/UseReducerExample'
import { UseStateExample } from './Components/Hooks/UseStateExample'
function App() {
 
  
  return (
    <div>
     
      {/* <Test2Code/> */}
      {/* <h3>Props-Profile Card</h3>
      <ProfilePropsDisplay/>
      <h3>Props-Destructing-Map-Profile Card</h3>
      <ProfileMapDisplay/>
      <h3>Props-Destructing-Map-Spread-Profile Card</h3>
      */}
       {/* <ProfileSpreadMapDisplay/>  */}
      {/* Api call */}
      {/* <TodosAPI/> */}
      {/* <UseRefExample/> */}
      {/* <UseMemoExample/> */}
      {/* <BasicForm/> */}

      {/* <UseReducerExample/> */}
      <UseStateExample/>

    </div>
  )
}

export default App
// class= class is reserved >>
// className=
// spread operator