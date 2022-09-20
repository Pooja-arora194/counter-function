import React, { useReducer } from "react";
import './App.css';



const startingState = { count: 0 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count : state.count + 1}
    case 'decrement':
      return {count: state.count !== 0 ? state.count - 1 : (state.count = 0)}
    default:
      throw new Error('Error occured in counter')
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer,startingState);

  return (
    <div class="container my-5">
                   <div className="card ">
                       <div className="card-header">
                         <h1 className="text-center">Counter Function</h1>
                       </div>
                     <div className="card-body">
                               <h1>{state.count}</h1>
                               <div className='row'>
                                   <div className="col-sm-6">
                                   <button type="submit" className="btn btn-danger mt-3" onClick={dispatch ({type: 'increment'})} > Increment</button>
                                   </div>
                                   <div className="col-sm-6">
                                   <button type="submit" className="btn btn-info mt-3" onClick={dispatch ({type: 'decrement'})}> Decrement</button>
                                   </div>
                               </div>
    
                     </div>
                 </div>
    </div>
  );

}

export default App;