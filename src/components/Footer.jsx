import styles from "./Footer.module.css";
export default function Footer({completedtodos,ListTodos}){
    return (
<div className={styles.footer}>
    <span className={styles.item}>Completed : {completedtodos} </span>
    <span className={styles.item}> Total :{ListTodos}</span>
    
</div>
    );
}