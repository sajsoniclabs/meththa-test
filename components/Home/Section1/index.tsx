import React from "react";
import styles from "./index.module.css";
import section1 from "../../../public/images/Section1.svg";
import Home_page_top_image from "../../../public/images/Home_page_top_image.svg";

import Image from "next/image";

const Section1 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <div className={styles.leftSide_upperText}>
          A humanitarian service dedicated to serve the disabled Sri Lankans
          with loving kindness
        </div>
        <div className={styles.leftSide_downText}>Donate</div>
      </div>
      <div className={styles.rightSide}>
        <Image
          className={styles.meththalogopic}
          src={section1}
          alt={section1}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        />
        {/* Home_page_top_image */}
      </div>
      <div className={styles.MobilerightSide}>
        <Image
          className={styles.Mobilemeththalogopic}
          src={Home_page_top_image}
          alt={section1}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        />
      </div>
    </div>
  );
};

export default Section1;
