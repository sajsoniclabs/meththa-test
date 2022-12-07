import React, { useState, useEffect, HTMLAttributes } from "react";
import { NextPage } from "next";
import { BsSquareFill } from "react-icons/bs";
import {
  RiContactsBookLine,
  RiErrorWarningFill,
  RiMenu3Fill,
  RiUser3Fill,
} from "react-icons/ri";
import styles from "./index.module.css";
import style from "../index.module.css";
import Image from "next/image";
import e_profile_image from "../../../public/images/e_profile_image.png";
import e_cam from "../../../public/images/camara-icon.png";
import OutsideClickHandler from "react-outside-click-handler";
import {
  AiFillCamera,
  AiFillCaretDown,
  AiFillClockCircle,
  AiFillDelete,
  AiFillDownSquare,
  AiFillHeart,
  AiFillHome,
  AiFillPlusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { MdDashboard, MdDeleteOutline } from "react-icons/md";
import { IoMdArrowDropup, IoMdSettings } from "react-icons/io";


import mobbile_styles from "../index.module.css"
const EditProfile = (props: {
  setSelectedState: any;
  selectedState: string;
}) => {
  const [setOpen, setSetOpen] = useState<Boolean>(false);
  const [modelOpen, setModelOpen] = useState<Boolean>(false);
  const [emails, setEmails] = useState<string[]>(["admin@abccompany.uk"]);
  const [menuBarActive, setMenuBarActive] = useState(false);

  const [formValues, setFormValues] = useState<string[]>([
    "admin@abccompany.uk",
  ]);
  const [formFieldsNumber, setFormFieldsNumber] = useState<number>(1);
  // const [prefixes,setPrefixes]
  const prefixes = ["Mr", "Mrs", "Ms", "Dr"];
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {}

  const handleChange = (i: number, e: any) => {
    let newFormValues = [...formValues] as string[];
    newFormValues[i] = e.target.value as string;
    setFormValues(newFormValues);
  };

  // const a = 2
  console.log(typeof props.setSelectedState);

  const addFormFields = () => {
    console.log(formValues);
    setFormFieldsNumber(2);
    console.log(formFieldsNumber);
    if (formFieldsNumber < 2) {
      setFormValues([...formValues, ""]);
    }
  };

  const removeFields = (i: any) => {
    let newFormValues = [...formValues] as string[];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
    setFormFieldsNumber(1);
  };
  const onProfileEditeClick = () => {
    setModelOpen(!modelOpen);
  };

  const menuBar = () => {
    setMenuBarActive(!menuBarActive);
  };
  useEffect(() => {
    //  console.log(props)
    console.log("form values", formValues);
    console.log("selected state", props.selectedState);
  }, [formValues]);

  return (
    <div className={styles.e_profile_wrapper}>
      <text>Donor Dashboard</text>
      {/* mobile sidebar */}

      <div className={mobbile_styles.donor_dashboard_mobile}>
            <text className={styles.mobile_dashboard_text}>Donor Dashboard</text>
            <div onClick={menuBar}>
              <RiMenu3Fill size={32} style={{ cursor: "pointer" }} />
              {/* {menuBarActive ? <RiMenu3Fill size={32} style={{cursor:"pointer"}}/>  : <AiOutlineClose size={32} style={{cursor:"pointer"}}/>} */}
            </div>

            {/* mobile sidebar  start*/}
            {menuBarActive ? (
              <div className={mobbile_styles.mobile_sidebar} onClick={menuBar}>
                <div className={mobbile_styles.mobile_sidebar_close_button_wrapper}>
                  <AiOutlineClose
                    size={32}
                    style={{ cursor: "pointer" }}
                    className={mobbile_styles.mobile_sidebar_close_button}
                  />
                </div>
                <div className={mobbile_styles.mobile_sidebar_right}>
                  <div className={mobbile_styles.admin_side_navbarupper}>
                    <div className={mobbile_styles.profile_image_wrapper}>
                      <Image
                        src={e_profile_image}
                        className={mobbile_styles.profileImage}
                        alt="profile image"
                        // width="40px"
                        height="100px"
                      />
                      <text>adminprofile</text>
                    </div>
                    <ul>
                      <li>
                        <AiFillHome className={mobbile_styles.icon} />
                        <p>Admin Company</p>
                      </li>
                      <li>
                        <AiFillClockCircle className={mobbile_styles.icon} />
                        <p>Last donated 5 months ago</p>
                      </li>
                      <li>
                        <AiFillHeart className={mobbile_styles.icon} />
                        <p>Donated for 2 years</p>
                      </li>
                    </ul>
                  </div>
                  <div className={mobbile_styles.admin_sidenavbar_lower}>
                    {/* <div className={mobbile_styles.admin_sidenavbar_item}> */}
                    <ul className={mobbile_styles.middle_items}>
                      <li className={mobbile_styles.middle_items_item}>
                        <MdDashboard className={mobbile_styles.icon2} />
                        <p
                          className={mobbile_styles.bold}
                          // onClick={() => setSelectedState("dashboard")}
                        >
                          Dashboard
                        </p>
                      </li>
                      <li>
                        <FaCalendarAlt className={mobbile_styles.icon2} />
                        <p
                          className={mobbile_styles.bold}
                          // onClick={() => setSelectedState("donation-history")}
                        >
                          Donation History
                        </p>
                      </li>
                      <li>
                        <IoMdSettings className={mobbile_styles.icon2} />
                        <p
                          className={mobbile_styles.bold}
                          // onClick={() => setSelectedState("edit-profile")}
                        >
                          Edit Profile
                        </p>
                      </li>
                    </ul>

                    {/* logout */}

                    <ul>
                      <li>
                        <IoMdSettings className={mobbile_styles.icon2} />
                        <p style={{ fontWeight: "normal" }} >Logout</p>
                        {/* onClick={logoutModel} */}
                      </li>{" "}
                    </ul>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* mobile sidebar end */}
          </div>
      <div className={styles.stats_text_wrapper}>
        <RiUser3Fill className={style.d_icon} />
        <text>Profile Information</text>
      </div>
      <div className={styles.edit_image_wrapper}>
        {/* <div className=></div> */}
        <div className={styles.avatar_wrapper}>
          <Image src={e_profile_image} />
          <div className={styles.e_cam_wrapper} onClick={onProfileEditeClick}>
            <Image src={e_cam} />
          </div>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setModelOpen(false);
          }}
        >
          {modelOpen && (
            <div className={styles.edit_image_model}>
              <div className={styles.cam_model}>
                <AiFillCamera size={24} color={"#818181"} />
                <text>Add new image</text>
              </div>
              <div className={styles.cam_model_del}>
                <AiFillDelete size={24} color={"#818181"} />
                <text>Add new image</text>
              </div>
            </div>
          )}
        </OutsideClickHandler>
      </div>

      <div className={styles.e_username}>
        {/* <div className={styles.prefix}>
          <div className={styles.prefix_name}>
            <label>Prefix</label>
            <text>Mr</text>
          </div>
          <div className={styles.prefix_dropdown}>
          </div>
        </div> */}
        <div className={styles.e_prefix}>
          <div className={styles.e_prefix_left}>
            <label htmlFor="">Prefix</label>
            <p>Mr</p>
          </div>
          <div className={styles.e_prefix_right}>
            {setOpen ? (
              <IoMdArrowDropup
                onClick={() => setSetOpen(false)}
                className={styles.e_prefix_right_icon}
                size={30}
              />
            ) : (
              <AiFillCaretDown
                className={styles.e_prefix_right_icon}
                onClick={() => setSetOpen(true)}
                size={23}
              />
            )}
          </div>
          <OutsideClickHandler
            onOutsideClick={() => {
              setSetOpen(false);
            }}
          >
            {setOpen && (
              <div className={styles.dropdownContent}>
                {prefixes.map((prefix, index) => (
                  <span>{prefix}</span>
                ))}
              </div>
            )}
          </OutsideClickHandler>
        </div>
        <div className={styles.e_firstname}>
          <div className={styles.e_firstname_left}>
          <FaUser />
          </div>
           
          <div className={styles.e_firstname_right}>
            <label htmlFor="">First Name</label>
            <input type={"text"} placeholder={"Alex"}/>
          </div>
        </div>
        <div className={styles.e_lastname}>
          <div className={styles.e_lastname_left}>
            <FaUser />
          </div>
          <div className={styles.e_lastname_right}>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Thompson"/>
          </div>
        </div>
      </div>
      <div className={styles.e_company_field}>
        <label htmlFor="">Company name</label>
        <input type="text" placeholder="ABC Company Private Limited " />
      </div>

      {/* email field primary */}
      <div className={styles.e_email_field}>
        <div className={styles.e_email_left}>
          <AiFillDownSquare />
        </div>
        <div className={styles.e_email_right}>
          <label htmlFor="">{"Primary Email"}</label>
          <input
            type="text"
            name="email"
            placeholder={`admin@abccompany.uk`}
            className={styles.add_input}
          />
          <div></div>
        </div>
      </div>
      {formValues.length > 1 &&
        [1].map((elememt, index) => (
          <div>
            <div className={styles.e_email_field}>
              <div className={styles.e_email_left}>
                <AiFillDownSquare />
              </div>
              <div className={styles.e_email_right}>
                <label htmlFor="">{"Secondary Email"}</label>
                <input
                  type="text"
                  name="email"
                  placeholder={`admin2@abccompany.uk`}
                  className={styles.add_input}
                />
                <div>
                  {/* {formValues.map((element,index)=>
              <input type="text" name="email" placeholder="email" className={styles.add_input}/>
            )} */}
                </div>
              </div>
              {
                <div className={styles.email_delete} onClick={removeFields}>
                  <MdDeleteOutline />
                </div>
              }
            </div>
          </div>
        ))}

      <div className={styles.e_add_email}>
        <AiFillPlusCircle
          className={styles.e_add_email_button}
          onClick={() => addFormFields()}
        />
        <p>Add Email</p>
      </div>
      <div className={styles.e_add_address}>
        <TiHome className={styles.e_add_address_button} />
        <p>Address</p>
      </div>
      <div className={styles.e_add_address_}>
        <AiFillPlusCircle
          className={styles.e_add_address_button_}
          onClick={() =>
            (props.setSelectedState("add-address") as unknown) as string
          }
        />
        <p>Add Address</p>
      </div>

      <div className={styles.e_additional_info}>
        <div className={styles.e_additional_info_header}>
          <RiErrorWarningFill className={styles.e_additional_info_button} />
          <p>Additional Information</p>
        </div>
        <p>Anonymous Giving</p>
        <span>
          This will prevent your avatar, first name, donation comments and other
          information from appearing publicly on this organization’s website.
        </span>
        <div className={styles.e_additional_info_checkbox}>
          {/* <input type="radio" />
            <text className="caption">
              Listicle mukbang craft beer celiac banjo helvetica
            </text> */}
          <div>
            <input type="radio" color="#521818" />
            <p>Public - Show my donations publicly</p>
          </div>
          <div>
            <input type="radio" color="#521818" />
            <p>Private - Only organization admins can view my info</p>
          </div>
        </div>
        <button className={styles.e_profile_update_button}>
          Update Profile
        </button>
      </div>
    </div>
  );
  // react-outside-click-handler
};

export default EditProfile;
