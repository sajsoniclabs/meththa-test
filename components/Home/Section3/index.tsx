import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Section_2_img_1 from "../../../public/images/Section_2_img_1.svg";
import Section_2_img_2 from "../../../public/images/Section_2_img_2.svg";
import Section_2_img_3 from "../../../public/images/Section_2_img_3.svg";

const Section3 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftside}>
        <div className={styles.img1}>
          <Image
            className={styles.Section_2_img_1}
            src={Section_2_img_1}
            alt={Section_2_img_1}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </div>
        <div className={styles.img2}>
          <Image
            className={styles.Section_2_img_2}
            src={Section_2_img_2}
            alt={Section_2_img_2}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </div>
        <div className={styles.img3}>
          <Image
            className={styles.Section_2_img_3}
            src={Section_2_img_3}
            alt={Section_2_img_3}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </div>
      </div>
      <div className={styles.rightside}>
        <div className={styles.heading}>Our Mission</div>
        <div className={styles.text}>
          We will strive to provide a modern rehabilitation service dedicated to
          disabled people in Sri Lanka who seek our help, which will enable them
          to achieve their full physical potential with the use of customised
          artificial limbs, appliances or posture and mobility equipment we
          fabricate using appropriate, innovative and cost effective technology.
          We will also use our available resources to train these people to use
          the appliances to achieve the best possible outcomes.
        </div>
      </div>
    </div>
  );
};

export default Section3;
