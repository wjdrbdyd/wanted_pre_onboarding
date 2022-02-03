import React, { useState } from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ToggleBar = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #c5c5c5;
  height: 40px;
  width: 90px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 10px;
`;
const ToggleMode = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  width: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: all 0.3s;
  transform: ${(props) =>
    props.toggleOn ? "translateX(0px)" : "translateX(-90px)"};
  background-color: ${(props) => props.toggleOn && props.theme.buttonColor};
`;

const ToggleButton = styled.button`
  transform: ${(props) =>
    props.toggleOn ? "translateX(50px)" : "translateX(0px)"};
  margin-left: 5px;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 5;
  transition: transform 0.3s;
`;

const ToggleContents = styled.p`
  font-weight: 600;
`;
const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleWrapper>
      <ToggleBar>
        <ToggleMode toggleOn={toggle} />
        <ToggleButton
          toggleOn={toggle}
          onClick={() => setToggle((prev) => !prev)}
        ></ToggleButton>
      </ToggleBar>
      <ToggleContents>Toggle Switch {toggle ? "ON" : "OFF"}</ToggleContents>
    </ToggleWrapper>
  );
};

export default Toggle;
