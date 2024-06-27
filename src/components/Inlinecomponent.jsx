// const styles={
//     color:"blue",
//     background:"pink",
//     fontSize:"120px"
// }
// import "../css/style.css";
import styles from "./Inlinecomponent.module.css";
export default function Inlinecomponent(){
    return (
        <div>
            {/* <h3 style={{color:"blue"}}>Inline component</h3> */}
            {/* <h3 style={styles}>Inline component</h3> */}
            <h3 className={styles.header}>Inline component</h3>


        </div>
    );
}