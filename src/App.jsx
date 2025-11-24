import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  
let [todos, setTodos] = useState([{value:"Ahad"},{value:"Ahmed"}])

let [value,setValue] = useState("")

const addToDo = () => {
  setTodos([...todos , {value}]) //here javascript automatically make key name 'value' (object enhancement) 

  setValue("")

}



console.log(todos,"todos")
  return (
    <div>
      <input type="text"placeholder='Enter todos' value={value}    onChange={(e)=> setValue(e.target.value)} />
      <button onClick={addToDo}>Add ToDo</button>
      <ul>
          {todos.map((v,i)=><li key={i}>{v.value}</li>
          )}
      </ul>
    </div>
  );
}

export default App;
