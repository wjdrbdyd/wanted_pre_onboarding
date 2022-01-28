import React, { useState } from "react";
import styles from "../css/Tab.module.css";
const allTab = [
  {
    tabName: "Tab1",
    content: "Tab menu ONE",
  },
  {
    tabName: "Tab2",
    content: "Tab menu TWO",
  },
  {
    tabName: "Tab3",
    content: "Tab menu THREE",
  },
];

const Tab = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.tap_wrap}>
        {allTab.map((tab, index) => (
          <button
            className={`${styles.tab_button} ${
              currentIndex === index && styles.tab_button__active
            }`}
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
            {tab.tabName}
          </button>
        ))}
      </div>
      <p className={styles.contents}>{allTab[currentIndex].content}</p>
    </div>
  );
};

export default Tab;
