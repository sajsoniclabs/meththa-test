import React from "react";
import styles from "./index.module.css";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const RightSide = () => {
  return (
    <div className={styles.main}>
      <div className={styles.div_1_text}>Join our newsletter</div>
      <div className={styles.div_2}>
        <div className={styles.div_2_left}>
          <div className={styles.email_icon}>
            <MdEmail />
          </div>
          <div className={styles.email_text}>Email Address</div>
        </div>

        <div className={styles.subscribe}>Subscribe</div>
      </div>
      <div className={styles.div_3}>
        <div className={styles.div_3_left}>
          <div className={styles.div_3_left_header}>Learn More</div>
          <div className={styles.div_3_left_text}>Funds and Contribute</div>
          <div className={styles.div_3_left_text}>Mahawa Centre</div>
          <div className={styles.div_3_left_text}>Mankulam Centre</div>
          <div className={styles.div_3_left_text}>Mobile Outreach</div>
          <div className={styles.div_3_left_text}>Our History</div>
          <div className={styles.div_3_left_text}>Our Products</div>
          <div className={styles.div_3_left_text}>Research and Development</div>
        </div>

        {/* tablet */}
        <div className={styles.tablet_div_3_left}>
          <div className={styles.tablet_div_3_left_header}>Learn More</div>
          <div className={styles.tablet_div_3_leftside_main}>
            <div className={styles.tablet_div_3_leftside}>
              <div className={styles.tablet_div_3_left_text}>
                Funds and Contribute
              </div>
              <div className={styles.tablet_div_3_left_text}>Mahawa Centre</div>
              <div className={styles.tablet_div_3_left_text}>
                Mankulam Centre
              </div>
              <div className={styles.tablet_div_3_left_text}>
                Mobile Outreach
              </div>
            </div>
            <div className={styles.tablet_div_3_rigthside}>
              <div className={styles.tablet_div_3_left_text}>Our History</div>
              <div className={styles.tablet_div_3_left_text}>Our Products</div>
              <div className={styles.tablet_div_3_left_text}>
                Research and <br></br>Development
              </div>
            </div>
          </div>
        </div>
        {/* tablet */}

        <div className={styles.div_3_right}>
          <div className={styles.div_3_right_header}>Contact Us</div>
          <div className={styles.div_3_right_email}>
            <div className={styles.div_3_right_email_icon}>
              <MdEmail />
            </div>
            <div className={styles.div_3_right_email_text}>
              {/* meththafoundationmaho@gmail.com */}
            </div>
          </div>
          <div className={styles.div_3_right_tel}>
            <div className={styles.div_3_right_tel_icon}>
              <BsTelephoneFill />
            </div>
            <div className={styles.div_3_right_tel_text}>
              +94 (0)37 361 8170
            </div>
          </div>
          <div className={styles.div_3_right_text_1}>
            <div className={styles.div_3_right_text_1_text}>
              34 Redlake Drive, Pedmore,
            </div>
            <div className={styles.div_3_right_text_1_text}>
              Stourbridge, West Midlands
            </div>
            <div className={styles.div_3_right_text_1_text}>DY9 0RX</div>
          </div>
          <div className={styles.div_3_right_text_2}>
            <div className={styles.div_3_right_text_2_text}>
              Artificial limb and appliance centre,
            </div>
            <div className={styles.div_3_right_text_2_text}>
              Meththa Rehabilitation Foundation,
            </div>
            <div className={styles.div_3_right_text_2_text}>
              Moragollagama Road,
            </div>
            <div className={styles.div_3_right_text_2_text}>Mahawa</div>
            <div className={styles.div_3_right_text_2_text}>Sri Lanka</div>
          </div>
        </div>

        {/* tablet */}
        <div className={styles.tablet_div_3_right}>
          <div className={styles.div_3_right_header}>Contact Us</div>
          <div className={styles.div_3_right_email}>
            <div className={styles.div_3_right_email_icon}>
              <MdEmail />
            </div>
            <div className={styles.div_3_right_email_text}>
              meththafoundationmaho@gmail.com
            </div>
          </div>
          <div className={styles.div_3_right_tel}>
            <div className={styles.div_3_right_tel_icon}>
              <BsTelephoneFill />
            </div>
            <div className={styles.div_3_right_tel_text}>
              +94 (0)37 361 8170
            </div>
          </div>
          <div className={styles.div_3_right_text_1}>
            <div className={styles.div_3_right_text_1_text}>
              34 Redlake Drive, Pedmore, Stourbridge,
            </div>
            <div className={styles.div_3_right_text_1_text}>
              West Midlands, DY9 0RX
            </div>
          </div>
          <div className={styles.div_3_right_text_2}>
            <div className={styles.div_3_right_text_2_text}>
              Artificial limb and appliance centre,
            </div>
            <div className={styles.div_3_right_text_2_text}>
              Meththa Rehabilitation Foundation,
            </div>
            <div className={styles.div_3_right_text_2_text}>
              Moragollagama Road,
            </div>
            <div className={styles.div_3_right_text_2_text}>Mahawa</div>
            <div className={styles.div_3_right_text_2_text}>Sri Lanka</div>
          </div>
        </div>
        {/* tablet */}
      </div>
    </div>
  );
};

export default RightSide;
