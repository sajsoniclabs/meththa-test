import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const Index = ({ setPopUpOpen, isPopUpOpen }: any) => {
  return (
    <div className={styles.mainDiv}>
      {isPopUpOpen === true ? (
        <div className={styles.popupMain}>
          <>
            <div className={styles.close} onClick={() => setPopUpOpen(false)}>
              <AiOutlineClose />
            </div>
            <div className={styles.MaintopText}>
              Choose the type of donation
            </div>
            <div className={styles.Mainbottom}>
              <div className={styles.right}>
                <div className={styles.meththalogopic}>
                  <Image
                    src={"/images/popimage1.png"}
                    alt={"/images/popimage1.png"}
                    width={350}
                    height={200}
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  />
                </div>

                <div className={styles.text}>General Donation</div>
              </div>
              <div className={styles.left}>
                <div className={styles.meththalogopic}>
                  <Image
                    src={"/images/popimage2.png"}
                    alt={"/images/popimage2.png"}
                    width={350}
                    height={200}
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  />
                </div>

                <div className={styles.text}>General Donation</div>
              </div>
            </div>
          </>
        </div>
      ) : null}
    </div>
  );
};

export default Index;
