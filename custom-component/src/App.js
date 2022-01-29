import React from "react";
import "./App.css";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="title">Tab</h3>
        <Tab />
      </div>
      <div className="container">
        <h3 className="title">Modal</h3>
        <Modal />
      </div>
      <div className="container">
        <h3 className="title">ClickToEdit</h3>
        <ClickToEdit />
      </div>
      <div className="container">
        <h3 className="title">Tag</h3>
        <Tag />
      </div>
      <div className="container">
        <h3 className="title">Toggle</h3>
        <Toggle />
      </div>
      <div className="container ">
        <h3 className="title">AutoComplete</h3>
        <AutoComplete />
      </div>
    </div>
  );
}

export default App;
