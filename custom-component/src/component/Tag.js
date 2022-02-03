import React, { useState } from "react";
import styled from "styled-components";

const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const TagList = styled.div`
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  width: 80%;
  display: flex;
  align-items: center;
  button {
    background-color: white;
    font-size: 14px;
    margin-left: 10px;
    border-radius: 50%;
  }
  input {
    height: 20px;
    border: none;
  }
  input:focus {
    outline: none;
  }
`;
const STag = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 30px;
  margin: 5px;
  background-color: ${(props) => props.theme.buttonColor};
  color: white;
  font-size: 14px;
  border-radius: 5px;
  padding: 4px 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
  text-shadow: ${(props) => props.theme.textShadow};
`;

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
    <TagWrapper>
      <TagList>
        {tagList.map((tag, idx) => (
          <STag key={idx}>
            <span>{tag}</span>
            <button onClick={() => deletTag(idx)}>x</button>
          </STag>
        ))}

        <input
          value={inputVal}
          onChange={onChange}
          onKeyPress={addTab}
          type="text"
          placeholder="Press enter to add tags"
        />
      </TagList>
    </TagWrapper>
  );
};

export default Tag;
