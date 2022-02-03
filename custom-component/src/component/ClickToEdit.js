import React, { useState } from "react";
import styled from "styled-components";

const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 40px;
`;
const ViewInputBox = styled.div`
  font-size: 16px;
  padding: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label`
  height: 35px;
  margin-right: 10px;
`;
const Input = styled.input`
  text-align: center;
  width: 150px;
  padding-bottom: 16px;
  font-size: 14px;
  &:focus {
    border: 3px solid #81abbb;
    outline: none;
    height: 35px;
    width: 150px;
    padding-bottom: 0;
    font-size: 12px;
  }
`;
const View = styled.p`
  border: 1px solid rgb(0, 0, 0, 0.5);
  width: 150px;
  font-size: 14px;
  height: 35px;
  text-align: center;
`;

const ClickToEdit = () => {
  const [person, setPerson] = useState({ name: "김코딩", age: "33" });
  const [editMode, setEditMode] = useState({ name: false, age: false });

  const [editPerson, setEditPerson] = useState({
    name: person.name,
    age: person.age,
  });

  const changePerson = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const onEdit = (name) => {
    setEditMode({ ...editMode, [name]: true });
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setEditPerson({ ...person, [name]: value });
    setEditMode({ ...editMode, [name]: false });
  };

  return (
    <EditWrapper>
      <ViewInputBox>
        <Label>이름</Label>
        {editMode.name ? (
          <Input
            onBlur={onBlur}
            name="name"
            value={person.name}
            type="text"
            onChange={changePerson}
          />
        ) : (
          <View onClick={() => onEdit("name")}>{person.name}</View>
        )}
      </ViewInputBox>
      <ViewInputBox>
        <Label>나이</Label>
        {editMode.age ? (
          <Input
            onBlur={onBlur}
            name="age"
            value={person.age}
            type="number"
            onChange={changePerson}
          />
        ) : (
          <View onClick={() => onEdit("age")}>{person.age}</View>
        )}
      </ViewInputBox>

      <p>
        이름 {editPerson.name} 나이 {editPerson.age}
      </p>
    </EditWrapper>
  );
};

export default ClickToEdit;
