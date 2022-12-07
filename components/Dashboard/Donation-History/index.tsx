import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { AiFillClockCircle, AiFillHeart, AiFillHome, AiFillSignal, AiOutlineClose } from "react-icons/ai";
import { BsDot, BsPlayCircle, BsThreeDotsVertical } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "../index.module.css";

import profileImage from "../../../public/images/profile-image.png";


const DonationHistory: NextPage<any> = (props?: {
  index?: number;
  td?: any;
  selectedState: any;
  setSelectedState: any;
  setDonationReciptState:any
  logoutModel:any
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem,setSelectedItem]= useState()
  const [menuBarActive, setMenuBarActive] = useState(false);

  const [tabledata, setTableData] = useState([
    {
      id: 20,
      donation: "100",
      date: Date.now().toLocaleString(),
      status: "completed",
      link: "#",
      name:"name",
      email:"email"
    },
    {
      id: 30,
      donation: "200",
      date: Date.now().toLocaleString(),
      status: "completed",
      link: "#",
      name:"name",
      email:"email"
    },
    {
      id: 40,
      donation: "300",
      date: Date.now().toLocaleString(),
      status: "pending",
      link: "#",
      name:"name",
      email:"email"
    },
    {
      id: 50,
      donation: "400",
      date: Date.now().toLocaleString(),
      status: "pending",
      link: "#",
      name:"name",
      email:"email"
    },
    {
      id: 50,
      donation: "400",
      date: Date.now().toLocaleString(),
      status: "pending",
      link: "#",
      name:"name",
      email:"email"
    },
  ]);



  const handleSelected =(_selectedItem:any)=>{
    setSelectedItem(_selectedItem)
    setIsOpen(true)
  }
   const handleOnCloseModel =()=>{
    setSelectedItem(undefined)
    setIsOpen(false)
  }

  const handleOnClickModel =(id:any)=>{
    props?.setSelectedState("view-receipt")  
  }

  const menuBar = () => {
    setMenuBarActive(!menuBarActive);
  };
  return (
    <div>
      <text className={styles.rightdiv_text}>Donor Dashboard</text>
      <div className={styles.donor_dashboard_mobile}>
            <text className={styles.mobile_dashboard_text}>Donor Dashboard</text>
            <div onClick={menuBar}>
              <RiMenu3Fill size={32} style={{ cursor: "pointer" }} />
              {/* {menuBarActive ? <RiMenu3Fill size={32} style={{cursor:"pointer"}}/>  : <AiOutlineClose size={32} style={{cursor:"pointer"}}/>} */}
            </div>

            {/* mobile sidebar  start*/}
            {menuBarActive ? (
              <div className={styles.mobile_sidebar} onClick={menuBar}>
                <div className={styles.mobile_sidebar_close_button_wrapper}>
                  <AiOutlineClose
                    size={32}
                    style={{ cursor: "pointer" }}
                    className={styles.mobile_sidebar_close_button}
                  />
                </div>
                <div className={styles.mobile_sidebar_right}>
                  <div className={styles.admin_side_navbarupper}>
                    <div className={styles.profile_image_wrapper}>
                      <Image
                        src={profileImage}
                        className={styles.profileImage}
                        alt="profile image"
                        // width="40px"
                        height="100px"
                      />
                      <text>adminprofile</text>
                    </div>
                    <ul>
                      <li>
                        <AiFillHome className={styles.icon} />
                        <p>Admin Company</p>
                      </li>
                      <li>
                        <AiFillClockCircle className={styles.icon} />
                        <p>Last donated 5 months ago</p>
                      </li>
                      <li>
                        <AiFillHeart className={styles.icon} />
                        <p>Donated for 2 years</p>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.admin_sidenavbar_lower}>
                    {/* <div className={styles.admin_sidenavbar_item}> */}
                    <ul className={styles.middle_items}>
                      <li className={styles.middle_items_item}>
                        <MdDashboard className={styles.icon2} />
                        <p
                          className={styles.bold}
                          onClick={() => props?.setSelectedState("dashboard")}
                        >
                          Dashboard
                        </p>
                      </li>
                      <li>
                        <FaCalendarAlt className={styles.icon2} />
                        <p
                          className={styles.bold}
                          onClick={() => props?.setSelectedState("donation-history")}
                        >
                          Donation History
                        </p>
                      </li>
                      <li>
                        <IoMdSettings className={styles.icon2} />
                        <p
                          className={styles.bold}
                          onClick={() => props?.setSelectedState("edit-profile")}
                        >
                          Edit Profile
                        </p>
                      </li>
                    </ul>

                    {/* logout */}

                    <ul>
                      <li>
                        <IoMdSettings className={styles.icon2} onClick={props?.logoutModel} />
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
      <div className={styles.table_text_wrapper}>
        <span style={{ fontSize: "16px", margin: "0px" }}>
          12 Total Donations
        </span>
      </div>

      <div className={styles.table_wrapper} style={{ margin: "0px" }}>
        {/* <h1>Table is here</h1> */}
        <table>
          {/* <div> */}
          <tr>
            <th>ID</th>
            <th>Donation</th>
            <th>Campaign</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th></th>
          </tr>
          {tabledata.map((item, index) => (
            <tr className={styles.tr}>
              <td>{item.id}</td>
              <td>$ {item.donation}</td>
              <td>{item.link}</td>
              <td className={styles.date_time}>June 20, 2022 9:57 pm</td>
              <td>
                <div
                  className={
                    styles.completed_wrapper &&
                    styles.completed_wrapper &&
                    item.status === "completed"
                      ? styles.green
                      : styles.yellow
                  }
                >
                  <BsDot className={styles.completed_i} />
                  <span>{item.status}</span>
                </div>
              </td>
           {/* struggled at data passing to one donation reciept */}
              <td className={styles.table_link}>
                <div
                  className={styles.table_link_desc}
                  onClick={() =>{props?.setDonationReciptState({...item}), props?.setSelectedState("view-receipt")}}
                >
                  view recipt
                </div>
             
                <div className={styles.table_link_mob}>
                  <BsThreeDotsVertical onClick={handleOnCloseModel} />
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    {isOpen && (
                      <div
                        key={index}
                        className={styles.table_link_mob_model}
                        // onClick={}
                      >
                        <span>View Receipt</span>
                      </div>
                    )}
                  </OutsideClickHandler>
                </div>
              </td>
            </tr>
          ))}
        </table>
        <div className={styles.paginate_footer}>
          <p>Showing 1 - 4 of 12 donations</p>
          <div className={styles.page_buttons}>
            <div className={styles.previous_wrapper}>
              <BsPlayCircle className={styles.previous} />
              <text className={styles.previous_wrapper_text}>Previous</text>
            </div>
            <div className={styles.next_wrapper}>
              <BsPlayCircle className={styles.next} />
              <text>Next</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
