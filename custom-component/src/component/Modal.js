import React, { useState } from "react";
import styles from "../css/Modal.module.css";
const Modal = () => {
  const [modalView, setModalView] = useState(false);
  const onModal = () => {
    setModalView((prev) => !prev);
  };
  return (
    <div className={styles.modal_wrap}>
      <button onClick={onModal} className={styles.modal_button}>
        Open Modal
      </button>

      {modalView ? (
        <>
          <div className={styles.modal_box}>
            <button onClick={onModal}>x</button>
            <span>HELLO CODESTATES!</span>
          </div>
          <div className={styles.open_modal_background}></div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
