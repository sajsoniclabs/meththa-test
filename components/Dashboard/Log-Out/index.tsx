import {useEffect} from "react"
import { AiOutlineClose } from "react-icons/ai"
import styles from "./index.module.css"

const LogOut = (props:{logout:any,setLogOut:any})=>{

console.log(props.logout)
  return <div className={styles.logout_content_wrapper}>
    <div className={styles.close} onClick={props.setLogOut}>
        <AiOutlineClose/>
    </div>
    <text>Are your sure you want to logout?</text>
    <div className={styles.button_wrapper}>
        <button className={styles.lightButton}>cancel</button>
        <button className={styles.darkButton}>Yes</button>
    </div>
  </div>
}

export default LogOut