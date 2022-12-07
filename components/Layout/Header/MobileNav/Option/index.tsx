import React from "react";
import styles from "./index.module.css";

interface DataInit {
  id: number;
  name: string;
}

const data: Array<DataInit> = [
  { id: 1, name: "Our Products" },
  { id: 2, name: "Clinical & Workshop Facilities at Mahawa" },
  { id: 3, name: "Clinical & Workshop Facilities at Mankulam" },
  { id: 4, name: "Mobile Outreach Service" },
  { id: 5, name: "Research & Development" },
];

const Option = () => {
  return (
    <div className={styles.main}>
      {data.map((item, index) => (
        <div className={styles.text} key={index}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Option;
