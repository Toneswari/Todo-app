import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({todos,setTodos}){
    const[todo,setTodo]=useState("");
    // const[todos,setTodos]=useState([]);
    function handleSubmit(e){
        // console.log("submitted");
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
        // console.log(todos);
    }
    return(
        <form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.inputcontainer}>
        <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo}
        placeholder="Enter text here..." className={styles.modernInput}/>
        <button type="submit" className={styles.modernButton}>add</button>
        </div>
    </form>
    );
}