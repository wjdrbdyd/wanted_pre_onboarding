import React from "react";
import styled from "styled-components";
import "./App.css";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

const Assignment = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.borderColor};
  position: relative;
  margin-bottom: 10px;
  height: 300px;
  width: 100%;
  overflow: hidden;
`;
const Title = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 18px;
  font-weight: 800;
`;

function App() {
  return (
    <div>
      <Assignment>
        <Title>Tab</Title>
        <Tab />
      </Assignment>
      {/* <Assignment>
        <Title>Modal</Title>
        <Modal />
      </Assignment> */}
      {/* <Assignment>
        <Title>ClickToEdit</Title>
        <ClickToEdit />
      </Assignment> */}
      {/* <Assignment>
        <Title>Tag</Title>
        <Tag />
      </Assignment>
      <Assignment>
        <Title>Toggle</Title>
        <Toggle />
      </Assignment>
      <Assignment>
        <Title>AutoComplete</Title>
        <AutoComplete />
      </Assignment> */}
    </div>
  );
}

export default App;
