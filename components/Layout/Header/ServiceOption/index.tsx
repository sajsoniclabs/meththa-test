import React from "react";
import styles from "./index.module.css";

interface dataType {
  id: number;
  name: string;
}

const data: Array<dataType> = [
  { id: 1, name: "Our Products" },
  { id: 2, name: "Clinical & Workshop Facilities at Mahawa" },
  { id: 3, name: "Clinical & Workshop Facilities at Mankulam" },
  { id: 4, name: "Mobile Outreach Service" },
  { id: 5, name: "Research & Development" },
];

const Option = ({ onMouseLeaveServices,onMouseOverServices }: any) => {
  return (
    <div className={styles.main}>
      {data.map((item, index) => (
        <div
          key={index}
          onMouseLeave={onMouseLeaveServices}
          onMouseOverCapture={onMouseOverServices}
          className={styles.optionText}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Option;
