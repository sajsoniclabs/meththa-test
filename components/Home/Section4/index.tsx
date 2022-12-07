import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const Section4 = () => {
  return (
    <div className={styles.popupMain}>
      <div className={styles.MaintopText}>Fund & Contribute</div>
      <div className={styles.Mainbottom}>
        <div className={styles.left}>
          <div className={styles.meththalogopic_div}>
            <Image
              width={600}
              height={300}
              src={"/images/popimage2.png"}
              alt={"/images/popimage2.png"}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
          </div>
          <div className={styles.bottum_div}>
            <div className={styles.left_text1}>General Donation</div>
            <div className={styles.left_text2}>
              <div className={styles.left_text2_Donors}>
                Donors in our Universal Fund have signed up to donate to a
                patient and other services.
              </div>
            </div>
            <div className={styles.left_text3}>
              <div className={styles.left_text3_Donate}>Donate Now</div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.meththalogopic_div}>
            <Image
              width={600}
              height={300}
              src={"/images/popimage2.png"}
              alt={"/images/popimage2.png"}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
          </div>
          <div className={styles.bottum_div}>
            <div className={styles.left_text1}>General Donation</div>
            <div className={styles.left_text2}>
              <div className={styles.left_text2_Donors}>
                Donors in our Universal Fund have signed up to donate to a
                patient and other services.
              </div>
            </div>
            <div className={styles.left_text3}>
              <div className={styles.left_text3_Donate}>Donate Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
