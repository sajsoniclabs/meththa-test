import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Methalogo from "../../../../public/images/Meththalogo.svg";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowDropUp } from "react-icons/md";
import Option from "./Option";

interface DataInit {
  id: number;
  name: string;
}

const data: Array<DataInit> = [
  { id: 1, name: "Home" },
  { id: 2, name: "Services" },
  { id: 3, name: "Fund & Contribution" },
  { id: 4, name: "Our History" },
  { id: 5, name: "Contact" },
];

const MobileNav = ({ setShowMenu, showMenu }: any) => {
  const [isOption, setOption] = useState<boolean>(false);

  return (
    <div className={showMenu ? styles.main : styles.mainHover}>
      <div className={styles.top}>
        <div className={styles.image}>
          <Image
            className={styles.meththalogopic}
            src={Methalogo}
            alt={Methalogo}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </div>
        <div className={styles.close} onClick={() => setShowMenu(false)}>
          <AiOutlineClose />
        </div>
      </div>
      <div className={styles.middle}>
        {data.map((item, index) => (
          <div className={styles.middleText} key={index}>
            <div className={styles.serviceOption}>
              <div
                className={styles.servicewithIcon}
                onClick={() => setOption(!isOption)}
              >
                <div
                  className={
                    isOption && item.name === "Services" ? styles.namehover : ""
                  }
                >
                  {item.name}
                </div>
                <div>
                  {item.name === "Services" ? (
                    <MdOutlineArrowDropUp className={styles.arrowicon} />
                  ) : null}
                </div>
              </div>
              {item.name === "Services" ? (
                <div
                  className={isOption ? styles.line : styles.linehover}
                ></div>
              ) : null}
              <div>
                {item.name === "Services" ? (
                  <div
                    className={isOption ? styles.option : styles.optionHover}
                  >
                    {isOption ? <Option /> : ""}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.signInButton}>Sign In</div>
      <div className={styles.DonateButton}>Donate</div>
    </div>
  );
};

export default MobileNav;
