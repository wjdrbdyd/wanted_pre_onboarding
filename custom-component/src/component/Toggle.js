import React, { useState } from "react";
import styles from "../css/Toggle.module.css";
const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.toggle_wrap}>
      <div className={styles.toggle_bar}>
        <div
          className={`${styles.toggle_off} ${toggle && styles.toggle_on}`}
        ></div>
        <button onClick={() => setToggle((prev) => !prev)}></button>
      </div>
      <p>Toggle Switch {toggle ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Toggle;
