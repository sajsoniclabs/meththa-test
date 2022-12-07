import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import MeththaBottomLogo from "../../../../public/images/MeththaBottomLogo.svg";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";

const LeftSide = () => {
  return (
    <div className={styles.main}>
      <div className={styles.div_1}>
        <div className={styles.logo}>
          <Image
            className={styles.meththalogopic}
            src={MeththaBottomLogo}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </div>
        <div className={styles.div_1_text}>
          The Meththa Foundation, an innovative and highly cost effective
          voluntary service in Sri Lanka for amputees and other disabilities.
        </div>
      </div>
      <div className={styles.socialMediIcons}>
        <div className={styles.icon}>
          <BsFacebook className={styles.iconSize} />
        </div>
        <div className={styles.icon}>
          <AiFillTwitterCircle className={styles.iconSize} />
        </div>
        <div className={styles.icon}>
          <SiYoutubemusic className={styles.iconSize} />
        </div>
      </div>
      <div className={styles.div_3}>
        <div className={styles.Donate}>Donate</div>
        <div className={styles.grid_container}>
          <div className={styles.UK_coutry}>
            <div className={styles.header}>UK</div>
            <div className={styles.grid_text}>Sort Code 40-43-17</div>
            <div className={styles.grid_text}>Account Number : 92494949</div>
          </div>
          <div className={styles.Sri_Lanka_coutry}>
            <div className={styles.header}>Sri Lanka</div>
            <div className={styles.grid_text}>
              Bank of Ceylon, Mahawa Branch
            </div>
            <div className={styles.grid_text}>Account Number : 83706522</div>
          </div>
        </div>
        {/* tablet */}
        <div className={styles.tablet_grid_container}>
          <div className={styles.UK_coutry}>
            <div className={styles.header}>UK</div>
            <div className={styles.grid_text}>Sort Code 40-43-17</div>
            <div className={styles.grid_text}>Account Number : 92494949</div>
          </div>
          <div className={styles.Sri_Lanka_coutry}>
            <div className={styles.header}>Sri Lanka</div>
            <div className={styles.grid_text}>
              Bank of Ceylon, Mahawa Branch
            </div>
            <div className={styles.grid_text}>Account Number : 83706522</div>
          </div>
        </div>
        {/* tablet */}
        <div className={styles.bottom_text}>
          <div className={styles.grid_text}>
            United Kingdom Registered Charity Number: 1135141
          </div>
          <div className={styles.grid_text}>Registered SL NGO No: L157505</div>
          <div className={styles.grid_text}>
            Meththa rehabilitation foundation Guarantee LTD Reg No: GL2162
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
