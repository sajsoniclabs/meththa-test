import mainstyles from "../index.module.css";
import editeProfileStyles from "../Edit-Profile/index.module.css";
import styles from "./index.module.css";
import addressStyles from "../Edit-Profile/Address/index.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { RiUser3Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsDot } from "react-icons/bs";

const DonationReceipt = (props:{donationReciptState:any,selectedState:any,setSelectedState:any}) => {
  console.log(props)
  return (
    <div className={styles.ml_30}>
      <text className={styles.header}>Donor Dashboard</text>
      <div className={addressStyles.ad_back_link_button} onClick={()=>props.setSelectedState("donation-history")}>
        <IoIosArrowBack />
        <p>Back</p>
      </div>
      <div className={addressStyles.ad_header}>
        <TiHome className={addressStyles.ad_header_icon} />
        <text>Donation Receipt # {props.donationReciptState?.id}</text>
      </div>
      <div className={styles.don_info}>
        <div className={styles.don_info__}>
          <div className={styles.don_name_left}>
            <RiUser3Fill size={30} />
            <span>Donor Name</span>
          </div>
          <span>{props.donationReciptState?.name}</span>
        </div>
        <div className={styles.don_info__}>
          <div className={styles.don_name_left}>
            <MdEmail size={30} />
            <span>Email Address</span>
          </div>
          <span>{props.donationReciptState?.email}</span>
        </div>
      </div>
      <div className={styles.payment_info}>
        <div className={styles.payment_feild}>
          <span>payment status</span>
          <div
            className={
              mainstyles.completed_wrapper &&
              mainstyles.completed_wrapper &&
              "completed" === "completed"
                ? mainstyles.green
                : mainstyles.yellow
            }
          >
            <BsDot className={mainstyles.completed_i} />
            <span>{props.donationReciptState?.status}</span>
          </div>
        </div>
        <div className={styles.payment_feild}>
          <span>payment method</span>
          <span>Paypal</span>
        </div>
        <div className={styles.payment_feild}>
          <span>Donation Amount</span>
          <span>$ {props.donationReciptState?.donation}</span>
        </div>
        <div className={styles.payment_feild}>
          <span className={styles.donation_total}>Donation Total</span>
          <span className={styles.donation_total_number}>$ 100.00</span>
        </div>
      </div>
      <div className={styles.gift_aid}>
        <span>Gift Aid</span>
        <p>Yes, opted in. Download Declaration Form.</p>
      </div>
    </div>
  );
};

export default DonationReceipt;
