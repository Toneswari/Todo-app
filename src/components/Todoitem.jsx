import styles from "./Todoitem.module.css";
export default function Todoitem({item}){
    function deleteTodo(){
        console.log("deleting tod");
    }
    return(
        <div className={styles.items}>
<div className={styles.itemName}>
    {item}
    <span>
        <button className={styles.mybutton} onClick={deleteTodo}>x</button>
    </span>
</div>
<hr className={styles.line}/>
</div>
    );
}