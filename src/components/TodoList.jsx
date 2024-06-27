import Todoitem from "./Todoitem";
import styles from "./TodoList.module.css";
export default function TodoList({todos}){
    return(
        <div className={styles.todoitems}>
        {todos.map((item)=>(
            <Todoitem item={item} key={item}/>
        ))}
        </div>
    );
}