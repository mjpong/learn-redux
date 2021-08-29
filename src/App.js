import './App.css';
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './actions';
import Posts from "./components/Posts"
import Postform from './components/Postform';

import allReducers from "./reducers"
import { Provider } from 'react-redux';
import store from "./components/store"


// const store = createStore(
//   allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );




function App() {

  // const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);



  return (

    // <div className="counter-test">
    //   <h1>Counter {counter} </h1>
    //   <button onClick={() => dispatch(increment(10))}>+</button>
    //   <button onClick={() => dispatch(decrement(5))}>-</button>
    //   {isLogged ? <h3>Valuable Info</h3> : ''}
    // </div>
    <Provider store={store}>
      <Postform />
      <hr />
      <Posts />
    </Provider>

  );
}

export default App;
