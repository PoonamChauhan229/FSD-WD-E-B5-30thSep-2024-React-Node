
import './App.css'
import ProfilePropsDisplay from './Components/ProfilePropsDisplay'
import Test2Code from './Components/Test2Code'
import ProfileMapDisplay from './Components/ProfileMapDisplay'
import ProfileSpreadMapDisplay from './Components/ProfileSpreadMapDisplay'

function App() {
 
  
  return (
    <div>
     
      {/* <Test2Code/> */}
      <h3>Props-Profile Card</h3>
      <ProfilePropsDisplay/>
      <h3>Props-Destructing-Map-Profile Card</h3>
      <ProfileMapDisplay/>
      <h3>Props-Destructing-Map-Spread-Profile Card</h3>
      <ProfileSpreadMapDisplay/>
    </div>
  )
}

export default App
// class= class is reserved >>
// className=
// spread operator