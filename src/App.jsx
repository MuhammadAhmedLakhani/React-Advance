import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let name = "Ahad";

  // const updateName = ()=>{
  //   name = "Ahmed"
  //   console.log(name)
  // }

  let [counter,setCounter] = useState(0);

  console.log(counter)

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={()=> setCounter(counter +1)}>counter</button>
    </div>
  );
}

export default App;
