import Todoitem from "./Todoitem";
import styles from "./TodoList.module.css";
export default function TodoList({todos,setTodos}){
    const sorteditems=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
    return(
        <div className={styles.todoitems}>
        {sorteditems.map((item)=>(
            <Todoitem item={item} key={item.name} todos={todos} setTodos={setTodos}/>
        ))}
        </div>
    );
}