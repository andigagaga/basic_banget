import React from "react";
import { useState } from "react";

interface ToodoItem {
  text:string;
}

function TodoApp() {
  const [todos, setTodos] = useState<ToodoItem[]>([])
  const [input, setInput] = useState("")
  // const [email, setEmail] = useState("")

  const addTodo = (e:any) => {
    e.preventDefault()
    if(input.trim() === "") return;
    setTodos([...todos, {text: input}])
    setInput("")
    // setEmail("")
  }
  
  return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        {/* <input value={email} onChange={(e) => setEmail(e.target.value)}/> */}
        </div>
        <button onClick={addTodo}>Tambah Todo</button>
        <ul>
          {todos.map((todo,i) => (
            <li key={i}>
              <h5>
                {todo.text}
              </h5>
              {/* <h6>
                {todo.email}
              </h6> */}
            </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoApp;