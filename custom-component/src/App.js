import React from "react";
import "./App.css";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import Tab from "./component/Tab";

function App() {
  return (
    <div className="App">
      {/* <div className="container">
        <h3 className="title">Tab</h3>
        <Tab />
      </div>
      <div className="container">
        <h3 className="title">Modal</h3>
        <Modal />
      </div> */}
      <div className="container">
        <h3 className="title">ClickToEdit</h3>
        <ClickToEdit />
      </div>
    </div>
  );
}

export default App;
