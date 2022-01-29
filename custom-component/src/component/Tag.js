import React, { useState } from "react";
import styles from "../css/Tag.module.css";
const Tag = () => {
  const [tagList, setTagList] = useState(["CodeStates", "JJang"]);
  const [inputVal, setInputVal] = useState("");
  const deletTag = (idx) => {
    let copyTags = [...tagList];
    copyTags = copyTags.filter((tag) => {
      return tag !== tagList[idx];
    });
    setTagList(copyTags);
  };
  const onChange = (e) => setInputVal(e.target.value);

  const addTab = (e) => {
    if (e.key === "Enter") {
      const copyTagList = [...tagList];
      copyTagList.push(inputVal);
      console.log(copyTagList);
      setTagList(copyTagList);
      setInputVal("");
    }
  };
  console.log(tagList);
  return (
    <div className={styles.tag_wrapper}>
      <div className={styles.tag_list}>
        {tagList.map((tag, idx) => (
          <div key={idx} className={styles.tag}>
            <span>{tag}</span>
            <button onClick={() => deletTag(idx)}>x</button>
          </div>
        ))}

        <input
          value={inputVal}
          onChange={onChange}
          onKeyPress={addTab}
          type="text"
          placeholder="Press enter to add tags"
        />
      </div>
    </div>
  );
};

export default Tag;
