import React, { useState } from "react";
import styled from "styled-components";
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

const TabWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Tabs = styled.div`
  box-sizing: border-box;
  margin-left: 55px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  padding-left: 40px;
`;

const TabButton = styled.button`
  text-align: left;
  color: ${(props) => (props.active ? "white" : "#9c9c9c")};
  width: 33.3%;
  border: none;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 10px;
  transition: all 0.3s ease-in;
  background-color: ${(props) =>
    props.active ? props.theme.buttonColor : "#e0e0e0"};
  box-shadow: ${(props) => props.active && props.theme.boxShadow};
`;
const TabContents = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tab = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <TabWrapper>
      <Tabs>
        {allTab.map((tab, index) => (
          <TabButton
            active={currentIndex === index}
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
            {tab.tabName}
          </TabButton>
        ))}
      </Tabs>
      <TabContents className={styles.contents}>
        {allTab[currentIndex].content}
      </TabContents>
    </TabWrapper>
  );
};

export default Tab;
