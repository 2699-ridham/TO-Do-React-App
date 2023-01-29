import './App.css';
import React, { useState } from 'react';
import Todoitems from './components/todoItems';

function App() {
  const [list, setlist] = useState("");
  const [addlist, setaddlist] = useState([]);

  const AddItems = (e) => {
    setlist(e.target.value);
  }

  const handleClick = () => {
    setaddlist((oldItems) => {
      return [...oldItems, list];
    });
    // console.log(addlist);

    setlist("");
    // console.log(list);
  };

  const deleteItems = (id) => {
    console.log("delete successfully");
    setaddlist((oldItems) => {
      return oldItems.filter((ele, index) => {
        return (id !== index);
      })
    })
  }
  return (
    <div className="todo-List">
      <div className="center-div">
        <br />
        <h1>TODO List</h1>
        <br />
        <input type='text' value={list} placeholder='Add task!' onChange={AddItems} />
        <button onClick={handleClick}> + </button>
        <ol>
          {
            addlist.map((value, idx) => {
              return <Todoitems key={idx} id={idx} text={value} onSelect={deleteItems} />
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
