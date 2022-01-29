import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import styles from "../css/ClickToEdit.module.css";

const ClickToEdit = () => {
  const [person, setPerson] = useState({ name: "김코딩", age: "33" });
  const [editMode, setEditMode] = useState({ name: false, age: false });

  const [editPerson, setEditPerson] = useState({
    name: person.name,
    age: person.age,
  });

  const changePerson = (e) => {
    const { name, value } = e.target;
    console.log("1");
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const onEdit = (name) => {
    console.log("2");
    setEditMode({ ...editMode, [name]: true });
  };

  const onBlur = (e) => {
    console.log("3");
    const { name, value } = e.target;
    setEditPerson({ ...person, [name]: value });
    setEditMode({ ...editMode, [name]: false });
  };

  // const onEdit = (e) => {
  //   const { type } = e;
  //   const { name, value } = e.target;

  //   let status = type === "click" ? true : false;
  //   setEditPerson({
  //     ...editPerson,
  //     [name]: value,
  //   });
  //   console.log(status);
  //   setEditMode({
  //     ...editMode,
  //     [name]: status,
  //   });
  // };
  console.log(editMode);
  return (
    <div className={styles.edit_wrap}>
      <div className={styles.view_input_box}>
        <label>이름</label>
        {editMode.name ? (
          <input
            onBlur={onBlur}
            name="name"
            value={person.name}
            type="text"
            onChange={changePerson}
          />
        ) : (
          <p onClick={() => onEdit("name")}>{person.name}</p>
        )}
      </div>
      <div className={styles.view_input_box}>
        <label>나이</label>
        {editMode.age ? (
          <input
            onBlur={onBlur}
            name="age"
            value={person.age}
            type="number"
            onChange={changePerson}
          />
        ) : (
          <p onClick={() => onEdit("age")}>{person.age}</p>
        )}
      </div>

      <p>
        이름 {editPerson.name} 나이 {editPerson.age}
      </p>
    </div>
  );
};

export default ClickToEdit;
