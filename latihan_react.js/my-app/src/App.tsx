import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp"
import GetTodoApi from "./components/GetTodoApi";
import ShowPage from "./components/SetShow";
import FilterData from "./components/FilterData";
import Count from "./components/Count";
import InpuDelTodo from "./components/InpuDelTodo";
import GetPostApi from "./components/GetPostApi";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoApp/>}/>
      <Route path="/getTodo" element={<GetTodoApi/>}/>
      <Route path="/showPage" element={<ShowPage/>}/>
      <Route path="/FilterData" element={<FilterData/>}/>
      <Route path="/count" element={<Count/>}/>
      <Route path="/InpDelTodo" element={<InpuDelTodo/>}/>
      <Route path="/getPostApi" element={<GetPostApi/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
