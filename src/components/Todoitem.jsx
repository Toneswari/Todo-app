import styles from "./Todoitem.module.css";
export default function Todoitem({item,todos,setTodos}){
    const handleDelete = (name) => {
        console.log("deleting todo", name);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo !== name));
    };
    function handleClick(name){
        console.log("span clicked",name);
    const mytodos=  todos.map((todo)=>
        todo.name===name?
    {...todo,done:!todo.done}:todo);
    // console.log(mytodos);
    setTodos(mytodos);
    }
    const completedName=item.done?styles.spanItem:"";
    return(
        <div className={styles.items}>
<div className={styles.itemName}>
<span onClick={()=>handleClick(item.name)} className={completedName}>{item.name}</span> 
    <span>
        <button className={styles.mybutton} onClick={() => handleDelete(item)}>x</button>
    </span>
</div>
<hr className={styles.line}/>
</div>
    );
}