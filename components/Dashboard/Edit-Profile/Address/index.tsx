import {useState} from "react"
import { NextPage } from "next"
import styles from "./index.module.css"
import style from "../../index.module.css"
import { IoIosArrowBack } from "react-icons/io"
import { TiHome } from "react-icons/ti"
import { AiFillCaretDown } from "react-icons/ai"
import Button from "../../Button"
import OutsideClickHandler from "react-outside-click-handler"
const AddAddress:NextPage<any> = (props:{setSelectedState:any,selectedState:string})=>{
  
   const [open,setOpen] = useState<boolean>(false)
   
   function saveAddress (){
      console.log("save address")
   }
   const prefixes = ["Mr", "Mrs", "Ms", "Dr"];

   return(
    <div className={styles.ad_wrapper}>
     <text className={styles.rightdiv_text}>Donor Dashboard</text>
     <div className={styles.ad_back_link_button} onClick={()=>props.setSelectedState("edit-profile") as unknown as string}>
      <IoIosArrowBack/>
      <p>Back to Edit Profile</p>
     </div>
     <div className={styles.ad_header}>
      <TiHome className={styles.ad_header_icon}/>
      <text>Address</text>
     </div>
     <div className={styles.ad_streetad}>
        <input type="text" placeholder={'Street Address'} />
        <input type="text" placeholder={'Apartment/ Suite/ Unit etc'} />
        <div className={styles.ad_cityad}>
         <div className={styles.city_input}>
            <input type="text" placeholder={"City"} />
            {/* <AiFillCaretDown onClick={()=>setOpen(true)} className={styles.city_input_icon}/> */}
            <div>
            {/* <OutsideClickHandler
            onOutsideClick={() => {
              setOpen(false);
            }}
          >
            {open && (
              <div className={styles.city_content}>
                {prefixes.map((prefix,index)=><span>{prefix}</span>)}
              </div>
            )}
          </OutsideClickHandler> */}
            </div>
         </div>
      
         <input type="text" placeholder={'Postal Code'} className={styles.ad_postal_code}/>
        </div>
        <input type="text" placeholder={"Country"} />
        {/* <Button text={"Save Address"} className={styles.button_override}/> */}
        <button className={styles.button_override}>Save Address</button>
     </div>
    </div>
   )
}

export default AddAddress