import React, { useState,useEffect } from "react";
import styles from "./index.module.css";
import type { NextPage } from "next";
import homeVector from "../../public/images/home-vector.png";
import heartVector from "../../public/images/heart-vector.png";
import clockVecotor from "../../public/images/clock-vector.png";
import hostoryVector from "../../public/images/history-vector.png";
import settingsVecotor from "../../public/images/settings-vector.png";
import dashboardvecotor from "../../public/images/dashboard-vector.png";
import logoutVecotor from "../../public/images/logout-vector.png";
import profileImage from "../../public/images/profile-image.png";
import stateVector from "../../public/images/stats-vector.png"
import donationVector from "../../public/images/donation-vector.png"

import Image from "next/image";

// import icons
import { AiFillHome } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AiFillSignal } from "react-icons/ai";
import { BsSquareFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";



// components

import DonationHistory from "./Donation-History";
import EditProfile from "./Edit-Profile";
import AddAddress from "./Edit-Profile/Address";
import LogOut from "./Log-Out";
import DonationReceipt from "./Receipt";

const Dashboard: NextPage = () => {

  interface Obj {
    index:number,
    td:any,
    selectedState:any,
    setSelectedState:any
  }

  const [menuBarActive, setMenuBarActive] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("edit-profile");
  const [donationReciptState,setDonationReciptState] = useState({})
  const [logout,setLogOut] = useState(false)
  const [tabledata, setTableData] = useState([
    {
      id: 20,
      donation: "100",
      date: Date.now().toLocaleString(),
      status: "completed",
      link: "#",
    },
    {
      id: 30,
      donation: "200",
      date: Date.now().toLocaleString(),
      status: "completed",
      link: "#",
    },
    {
      id: 40,
      donation: "300",
      date: Date.now().toLocaleString(),
      status: "pending",
      link: "#",
    },
    {
      id: 50,
      donation: "400",
      date: Date.now().toLocaleString(),
      status: "pending",
      link: "#",
    },
    {
      id: 50,
      donation: "400",
      date: Date.now().toLocaleString(),
      status: "pending",
      link: "#",
    },
  ]);

  const menuBar = () => {
    setMenuBarActive(!menuBarActive);
  };

  const logoutModel =()=>{
    setLogOut(!logout)
    console.log(logout)
    console.log("logout")
  }

  // useEffect(()=>{
  //   console.log(selectedState)
  // },[selectedState])


  return (
    <div className={styles.maindiv}>
      <div className={styles.leftdiv}>
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
            <li
              className={styles.middle_items_item}
              onClick={() => setSelectedState("dashboard") as unknown as string}
            >
              <MdDashboard className={styles.icon2} />
              <p>Dashboard</p>
            </li>
            <li onClick={() => setSelectedState("donation-history") as unknown as string}>
              <FaCalendarAlt className={styles.icon2} />
              <p>Donation History</p>
            </li>
            <li onClick={() => setSelectedState("edit-profile") as unknown as string}>
              <IoMdSettings className={styles.icon2} />
              <p>Edit Profile</p>
            </li>
          </ul>

          {/* logout */}

          <ul onClick={logoutModel} className={styles.logoutDiv}>
            <li>
              <IoMdSettings className={styles.icon2} />
              <p>Logout</p>
            </li>{" "}
          </ul>
          {/* </div> */}
        </div>
      </div>
    <div className={styles.rightdiv}>
      {selectedState == "dashboard" && (
        <div>
          {/* <AiFillSignal /> */}
          <text className={styles.rightdiv_text}>Donor Dashboard</text>
          <div className={styles.donor_dashboard_mobile}>
            <text>Donor Dashboard</text>
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
                          onClick={() => setSelectedState("dashboard")}
                        >
                          Dashboard
                        </p>
                      </li>
                      <li>
                        <FaCalendarAlt className={styles.icon2} />
                        <p
                          className={styles.bold}
                          onClick={() => setSelectedState("donation-history")}
                        >
                          Donation History
                        </p>
                      </li>
                      <li>
                        <IoMdSettings className={styles.icon2} />
                        <p
                          className={styles.bold}
                          onClick={() => setSelectedState("edit-profile")}
                        >
                          Edit Profile
                        </p>
                      </li>
                    </ul>

                    {/* logout */}

                    <ul>
                      <li>
                        <IoMdSettings className={styles.icon2} />
                        <p style={{ fontWeight: "normal" }} onClick={logoutModel}>Logout</p>
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
            {/* <BsSquareFill className={styles.d_icon} /> */}
            <Image src={stateVector} className={styles.d_icon}/>
            <text>Your Giving stats</text>
          </div>
          <div className={styles.stats_wrapper}>
            <div className={styles.stats}>
              <h1>11</h1>
              <p>Number of Donations</p>
            </div>
            <div className={styles.stats}>
              <h1>$ 1200</h1>
              <p>Lifetime Donations</p>
            </div>
            <div className={styles.stats}>
              <h1>$ 111</h1>
              <p>Avarage Donation</p>
            </div>
          </div>

          {/* table */}

          <div className={styles.table_text_wrapper}>
            {/* <AiFillSignal className={styles.d_icon} /> */}
            <Image src={donationVector} className={styles.d_icon}/>
            <text>Recent Donations</text>
          </div>

          <div className={styles.table_wrapper}>
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
                  <td>#</td>
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

                  <td className={styles.table_link} onClick={() => setSelectedState("view-receipt")}>
                    <div className={styles.table_link_desc}>view recipt</div>
                    <div className={styles.table_link_mob}>
                      <BsThreeDotsVertical />
                    </div>
                  </td>
                  {false && <div className={styles.table_link_model_mobile}>
                    <span>View Receipt</span>
                  </div>}

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
      ) ||  selectedState == "donation-history" && (
        <DonationHistory    
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          setDonationReciptState={setDonationReciptState}
          logoutModel={logoutModel}
        />
      ) || selectedState == "edit-profile" && (
        <EditProfile
          selectedState={selectedState}
          setSelectedState={setSelectedState} />
      ) || selectedState == "add-address" && (
        <AddAddress   
        selectedState={selectedState}
        setSelectedState={setSelectedState} />
      ) || selectedState=="view-receipt" && (
        <DonationReceipt  
        donationReciptState={donationReciptState}
          selectedState={selectedState}
          setSelectedState={setSelectedState}/>
      )}
      <div className={styles.logout}>
        {logout &&<LogOut logout={logout} setLogOut={logoutModel}/> }
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
