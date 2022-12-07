import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Section5_image_1 from "../../../public/images/Section5_image_1.svg";

const data = [
  {
    number: 1,
    url: "/images/Section5_image_1.svg",
    heading: "Disabled patient contacts Meththa Foundation and seeks care.",
    text: "Patients can contact us by phone or simply walk into the workshop at Moho or Mankulum requesting assistance with their disability.  ",
  },
  {
    number: 2,
    url: "/images/Section5_image_2.svg",
    heading:
      "Meththa staff submits patients information to the online platform",
    text: "Our staff will register them and fill out the required paper work with them to access their financial situation and their prosthetic limb requirements. This information is then published to our online platform. ",
  },
  {
    number: 3,
    url: "/images/Section5_image_3.svg",
    heading: "Donors fund prosthesis for patients.",
    text: "Our fantastic community of donors see the published patients awaiting treatment and fund the prosthesis delivery. ",
  },
  {
    number: 4,
    url: "/images/Section5_image_4.svg",
    heading:
      "Meththa staff prepares prosthetic limb according to requirements.",
    text: "Our staff at Meththa Foundation starts the process of preparing and manufacturing the required limb according to the measurements. ",
  },
  {
    number: 5,
    url: "/images/Section5_image_5.svg",
    heading: "Donors recieve update on delivery of the limb.",
    text: "Once Meththa delivers the limb, fits and trains the patients on how to use it effectively, our donors who contributed to the patients will get a thank you message with a picture of the delivery. ",
  },
];

const Section5 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.web}>
        <div className={styles.heading}>Donation Process</div>

        {data.map((item, index) => (
          <div key={index}>
            {item.number % 2 !== 0 ? (
              <div className={styles.catergory_1}>
                <div className={styles.line_div}>
                  <div className={styles.left_div}>
                    <Image
                      className={styles.meththalogopic}
                      src={item.url}
                      width={640}
                      height={400}
                      alt={Section5_image_1}
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    />
                  </div>
                  <div className={styles.right_div}>
                    <div className={styles.number}>{item.number}</div>
                    <div className={styles.text_heading}>{item.heading} </div>
                    <div className={styles.text_des}>{item.text}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.catergory_2}>
                <div className={styles.line_div}>
                  <div className={styles.right_div}>
                    <div className={styles.number}>{item.number}</div>
                    <div className={styles.text_heading}>{item.heading}</div>
                    <div className={styles.text_des}>{item.text}</div>
                  </div>
                  <div className={styles.left_div}>
                    <Image
                      src={item.url}
                      width={640}
                      height={400}
                      alt={Section5_image_1}
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      className={styles.meththalogopic}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.mobile}>
        <div className={styles.heading}>Donation Process</div>
        {data.map((item, index) => (
          <div key={index}>
            <div className={styles.line_div}>
              <div className={styles.right_div}>
                <div className={styles.number}>{item.number}</div>
                <div className={styles.text_heading}>{item.heading}</div>
                <div className={styles.text_des}>{item.text}</div>
              </div>
              <div className={styles.left_div}>
                <Image
                  src={item.url}
                  width={640}
                  height={400}
                  alt={Section5_image_1}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  className={styles.meththalogopic}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
