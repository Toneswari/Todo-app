import styles from "./Todoitem.module.css";
export default function Todoitem({item}){
    return(
        <div className={styles.items}>
<div className={styles.itemName}>
    {item}
    <span>
        <button className={styles.mybutton}>x</button>
    </span>
</div>
<hr className={styles.line}/>
</div>
    );
}