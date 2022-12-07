import React from "react";
import styles from "./index.module.css";

const Popup = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Waste Not, Want Not</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris
        mauris, tincidunt vitae turpis in, fringilla mollis magna. Sed neque
        magna, rutrum sed eleifend at, sagittis non diam.
      </div>
      <div className={styles.button_div}>
        <div className={styles.button}>Donate</div>
      </div>
    </div>
  );
};

export default Popup;
