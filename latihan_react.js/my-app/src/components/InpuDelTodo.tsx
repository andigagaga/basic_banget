import React from "react";
import { useState } from "react";

interface ITodo {
  id: number;
  text: string;
}

function InpuDelTodo() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [text, setText] = useState<string>("")
//   console.log("text",text)


  const addTodo = () => {
    if(text.trim() === "") return;
    const newTodo:ITodo = {id: Date.now(), text}
    setTodos([...todos, newTodo])
    setText("")
  }

  const deleteTodo = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
//   console.log("todos", todos)
  return (
    <div>
        <h2>List Todo</h2>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={addTodo}>Add Todo</button>
        <div>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default InpuDelTodo;
