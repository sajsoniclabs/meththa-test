import React from "react";
import MeththaBottomLogo from "../../../../public/images/MeththaBottomLogo.svg";
import Image from "next/image";
import styles from "./index.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const MobileNav = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image
          className={styles.meththalogopic}
          src={MeththaBottomLogo}
          width={55}
          height={75}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        />
      </div>
      <div className={styles.logoHeading}>
        The Meththa Foundation, an innovative and highly cost effective
        voluntary service in Sri Lanka for amputees and other disabilities.
      </div>
      <div className={styles.socialMediIcons}>
        <div className={styles.icon}>
          <BsFacebook className={styles.iconSize} />
        </div>
        <div className={styles.icon}>
          <AiFillTwitterCircle className={styles.iconSize} />
        </div>
        <div className={styles.lastIcon}>
          <SiYoutubemusic className={styles.iconSize} />
        </div>
      </div>
      <div className={styles.newsletter}>Join our newsletter </div>

      <div className={styles.email_div}>
        <div className={styles.email_left}>
          <div className={styles.email_icon}>
            <MdEmail />
          </div>
          <div className={styles.email_text}>Email Address</div>
        </div>
      </div>
      <div className={styles.subscribe}>Subscribe</div>

      <div className={styles.Donate}>
        <div className={styles.Donate_text}>Donate</div>

        <div className={styles.uk}>
          <div className={styles.UK_heading}>UK</div>
          <div className={styles.UK_text}>
            <div className={styles.UK_text_sort}>Sort Code 40-43-17</div>
            <div className={styles.UK_text_account}>
              Account Number : 92494949
            </div>
          </div>
        </div>
        <div className={styles.srilanka}>
          <div className={styles.srilanka_main_div}>
            <div className={styles.srilanka_heading}>Sri Lanka</div>
            <div className={styles.srilanka__text}>
              <div className={styles.srilanka__text_1}>
                Bank of Ceylon, Mahawa Branch
              </div>
              <div className={styles.srilanka__text_2}>
                Account Number : 83706522
              </div>
            </div>
          </div>
          <div className={styles.srilanka__text_2}>
            <div className={styles.srilanka__text_2_1}>
              United Kingdom Registered Charity Number: 1135141
            </div>
            <div className={styles.srilanka__text_2_2}>
              Registered SL NGO No: L157505
            </div>
            <div className={styles.srilanka__text_2_3}>
              Meththa rehabilitation foundation Guarantee LTD Reg No: GL2162
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contact_div}>
        <div className={styles.contact_Heading}>Contact Us</div>
        {/* <div className={styles.email_section}>
          <div className={styles.email_icon}>
            <MdEmail />
          </div>
          <div className={styles.email_address}>
            meththafoundationmaho@gmail.com
          </div>
        </div> */}
        <div className={styles.tel_section}>
          <div className={styles.tel_icon}>
            <BsTelephoneFill />
          </div>
          <div className={styles.tel_text}>+94 (0)37 361 8170</div>
        </div>
        <div className={styles.botton_up_section_text}>
          <div className={styles.botton_section_same_text}>
            34 Redlake Drive, Pedmore, Stourbridge,
          </div>
          <div className={styles.botton_section_same_text}>
            West Midlands, DY9 0RX
          </div>
        </div>
        <div className={styles.botton_section_text}>
          <div className={styles.botton_section_same_text}>
            Artificial limb and appliance centre,
          </div>
          <div className={styles.botton_section_same_text}>
            Meththa Rehabilitation Foundation,
          </div>
          <div className={styles.botton_section_same_text}>
            Moragollagama Road, Mahawa Sri
          </div>
          <div className={styles.botton_section_same_text}>Lanka</div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
