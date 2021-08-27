import './App.css';
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);



  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <h3>Valuable Info</h3> : ''}

    </div>
  );
}

export default App;
