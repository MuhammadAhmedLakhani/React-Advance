import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';

// function App() {

  
// let [todos, setTodos] = useState([
//   {
//     value:"Ahad",
//     disabled:true
// },
//   {
//   value:"Ahmed",
//   disabled:true
// }])

// let [value,setValue] = useState("")

// const addToDo = () => {
//   setTodos([...todos , {value}]) //here javascript automatically make key name 'value' (object enhancement) 

//   setValue("")

// }
// const deleteToDo = (index) => {
//   console.log(index)
//   let oldtodos = [...todos]
//   oldtodos.splice(index,1)
//   setTodos(oldtodos)
// }

// const editToDo = (value) => {

//     console.log(value)

//     value.disabled = false

//     console.log(value,"updated")
//     console.log(todos,"todos")
//     setTodos([...todos])

// }

// const updateTodo = (val) => {
//   // v.value = event.target.value
//   // setTodos([todos])

//   console.log(val)
//   val.disabled = true;
//   console.log(val,"updateds")
//   setTodos([...todos])

// }




//   return (
//     <div>
//       <input type="text"placeholder='Enter todos' value={value}    onChange={(e)=> setValue(e.target.value)} />


//       <button onClick={addToDo}>Add ToDo</button>

//       <button onClick={()=>setTodos([])}>Delete All</button>

//       <br/>
//       <ul>
//           {todos.map((v,i)=><li key={i}>

//             <input  disabled = {v.disabled}  type="text" defaultValue={v.value} onChange={(e)=> v.value = e.target.value}  />
            

//             {v.disabled?            //TRENERY OPERATOR
              
//               <button onClick={()=> editToDo(v)}>Edit</button>
//               :
//               <button onClick={()=>updateTodo(v)}>Update </button>
//             }
//             <button onClick={()=>deleteToDo(i)}>Delete</button>
//           </li>
//           )}
//       </ul>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import { useEffect } from 'react';





function App(){
  const [counter , setCounter] = useState(0)
  const [name , setName] = useState("Ahemd")
  
//runs once only

  // useEffect(()=>{
  //   console.log("test")
  // },[])
  
// useEffect(()=>{
//   console.log("runs with every state change")
// })


useEffect(()=>{
  console.log("slected runs")
},[counter])

  return (
    <div>

      <h1>{name}</h1>
      <button onClick={()=>setName("Ahad")}>update</button>


    <h1>{counter}</h1>
    <button onClick={()=> setCounter(counter + 1)}>+</button>
    <button onClick={()=> setCounter(counter - 1)}>-</button>

    </div>
  )
}


export default App;
