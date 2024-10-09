import { useReducer } from "react"

export const UseReducerExample=()=>{
    const initialState=0;
    
    // reducer function
    const reducer=(state,action)=>{
        // switch case
        switch(action){
            case 'increment'://action
                return state+1;
            case 'decrement':
                return state-1;
            default:
                return state;
        }

    }

    const[count,dispatch]=useReducer(reducer,initialState)
    
    return(
        <>
            <h1>UseReducer Hook</h1>
            <h2>Count:{count}</h2> 
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
        </>
    )
}
// dispatch an action >>> reducer function is called >> update the state