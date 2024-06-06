import React, { useState } from "react";
import "./App.css";
import ToDolist from "./ToDolist";

const App = () => {
  const [name, setName] = useState("");
  const [Items, setItems] = useState([]);

  const onchange = (e) => {
    setName(e.target.value);
  };
  const listOfItems = (e) => {
    setItems((oldItems) => {
      return [...oldItems, name];
    });
    setName("");
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item!"
            value={name}
            onChange={onchange}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {Items.map((itemval, index) => {
              return (
                <ToDolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
