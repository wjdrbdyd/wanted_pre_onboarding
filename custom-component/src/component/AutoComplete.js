import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
const AutoWrapper = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  margin: 100px 0px;
`;
const Input = styled.input`
  border-radius: 18px;
  padding: 18px;
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 3px 3px 5px ${(props) => props.theme.borderColor},
    -2px 0px 1px ${(props) => props.theme.borderColor};
  border-bottom-left-radius: ${(props) => props.focusOn && "0px"};
  border-bottom-right-radius: ${(props) => props.focusOn && "0px"};
  &:focus {
    outline: none;
  }
`;
const AutoList = styled.ul`
  background-color: white;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  outline: none;
  padding: 18px;
  font-size: 16px;
  box-shadow: 3px 3px 5px ${(props) => props.theme.borderColor},
    -2px 0px 1px ${(props) => props.theme.borderColor};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  li:hover {
    width: 100%;
    background-color: #efefef;
  }
`;
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
    <AutoWrapper onMouseLeave={onLeave}>
      <Input
        onChange={onChange}
        onFocus={onFocus}
        value={searchVal}
        focusOn={searchVal !== "" && searchList.length > 0}
      />
      {searchVal !== "" && searchList.length > 0 && (
        <AutoList>
          {searchList.map((item) => (
            <li key={item.id} onClick={onClick} id={item.id}>
              {item.name}
            </li>
          ))}
        </AutoList>
      )}
    </AutoWrapper>
  );
};

export default AutoComplete;
