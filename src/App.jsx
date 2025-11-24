import logo from './logo.svg';
import './App.css';

function App() {

  let name = "Ahad";

  const updateName = ()=>{
    name = "Ahmed"
    console.log(name)
  }
  return (
    <div>
      <h1 >{name}</h1>
      <button onClick={updateName}>Update</button>
    </div>
  );
}

export default App;
