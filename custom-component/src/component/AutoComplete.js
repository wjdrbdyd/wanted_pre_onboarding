import React, { useEffect, useState } from "react";
import styles from "../css/AutoComplete.module.css";
const data = [
  {
    id: 0,
    name: "antique",
  },
  {
    id: 1,
    name: "vintage",
  },
  {
    id: 2,
    name: "중고A급",
  },
  {
    id: 3,
    name: "rustic",
  },
  {
    id: 4,
    name: "refurbished",
  },
];
const AutoComplete = () => {
  const originList = data;
  const [searchList, setSearchList] = useState([...originList]);
  const [searchVal, setSearchVal] = useState("");

  const onChange = (e) => {
    const copyList = originList.filter((item) => {
      return item.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1;
    });

    setSearchVal(e.target.value);
    setSearchList(copyList);
  };

  const onFocus = (e) => {
    const copyList = originList.filter((item) => {
      return item.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1;
    });
    setSearchList(copyList);
  };

  const onClick = (e) => setSearchVal(originList[e.target.id].name);
  const onLeave = (e) => setSearchVal("");

  return (
    <div className={styles.auto_wrap} onMouseLeave={onLeave}>
      <input
        onChange={onChange}
        onFocus={onFocus}
        value={searchVal}
        className={searchVal !== "" && searchList.length > 0 && styles.focus_on}
      />
      {searchVal !== "" && searchList.length > 0 && (
        <ul className={styles.auto_list}>
          {searchList.map((item) => (
            <li key={item.id} onClick={onClick} id={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
