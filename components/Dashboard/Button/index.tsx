import { NextPage } from "next";
import styles from "./index.module.css"
const Button:NextPage<any> = (props:{onClickFunction:any,text:string})=>{
  return  <button className={styles.button} onClick={props.onClickFunction}>
        {props.text}
    </button>

}

export default Button