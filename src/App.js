import React from 'react';
const startingState = 0;
const reducerCounter = (state, action) => {
  switch (action.type) {
    case 'increment':
      return  state + 1;
    case 'decrement':
      return  state !== 0 ? state - 1 : (state = 0) ;
    default:
      throw new Error('Error occured in counter')
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducerCounter, startingState)

  return (
    <div class="container my-5">
        <div className="card pt-4">
             <h2 className="text-center"> Counter Example</h2>
                  <div className='card-body text-center'>
                       <h1>{state}</h1>
                          <div className='row'>
                              <div className="col-sm-6">
                              <button type="submit" className="btn btn-danger mt-3" onClick={ () => {dispatch ({ type: 'increment' })}}> Increment</button>
                              </div>
                              <div className="col-sm-6">
                              <button type="submit" className="btn btn-info mt-3" onClick = { () => {dispatch ({ type: 'decrement' }) }}> Decrement</button>
                              </div>
                          </div>
                  </div>
          </div>
        </div>
  
  );

}

export default App;


//  import React, { useState } from 'react';
//  import './App.css';

//  function App() {

//     const [count,setCount] = useState(0);
  
//      const increNum = () => {
//        setCount(count + 1);
//      }

//      const decNum = () => {
//        if(count > 0){
//            setCount(count - 1);
//        }
    
//      }

//    return (
//      <div className="App">
//            <div class="container my-5">
//                <div className="card ">
//                    <div className="card-header">
//                      <h1 className="text-center">Counter Function</h1>
//                    </div>
//                  <div className="card-body">
//                            <h1>{count}</h1>
//                            <div className='row'>
//                                <div className="col-sm-6">
//                                <button type="submit" className="btn btn-danger mt-3" onClick={increNum} > Increment</button>
//                                </div>
//                                <div className="col-sm-6">
//                                <button type="submit" className="btn btn-info mt-3" onClick={decNum}> Decrement</button>
//                                </div>
//                            </div>

//                  </div>
//              </div>
//        </div>   
//      </div>
//    );
//  }

//  export default App;
