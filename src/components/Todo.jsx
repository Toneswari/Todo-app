import { useState } from "react";
import Todoitem from "./Todoitem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
    
    
    const[todos,setTodos]=useState([]);
    const completedtodos=todos.filter((todo)=>todo.done).length;
    const ListTodos=todos.length;
    return(
<div>
    <Form todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    <Footer completedtodos={completedtodos} ListTodos={ListTodos}/>
</div>
    );
}