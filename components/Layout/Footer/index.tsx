import React from "react";
import styles from "./index.module.css";
import LeftSide from "./LeftSide";
import MobileNav from "./MobileNav";
import Popup from "./Popup";
import RightSide from "./RightSide";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.popup}>
        <Popup />
      </div>
      <div className={styles.left}>
        <LeftSide />
      </div>
      <div className={styles.right}>
        <RightSide />
      </div>
      <div className={styles.mob}>
        <MobileNav />
      </div>
    </div>
  );
};

export default Footer;
