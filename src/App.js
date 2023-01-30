import './App.css';
import React, { useState } from 'react';
import Todoitems from './components/todoItems';

function App() {
  const [list, setlist] = useState("");
  const [addlist, setaddlist] = useState([]);
  const [ToggleBtn, setToggleBtn] = useState(true);
  const [UpdateEditItem, setUpdateEditItem] = useState(null);

  const AddItems = (e) => {
    setlist(e.target.value);
  }

  const handleClick = () => {
    if (!list) {
      alert("Input can't be empty");
    } else if (list && !ToggleBtn) {
      setaddlist(addlist.map((value) => {
        if (value.id === UpdateEditItem) {
          return { ...value, name: list }
        }
        return value; 
      }))

      setToggleBtn(true);
      setlist('');
      setUpdateEditItem(null);

    } else {
      const allInputData = { id: new Date().getTime().toString(), name: list }
      setaddlist((oldItems) => {
        return [...oldItems, allInputData];
      });
      console.log(allInputData);

      setlist("");
      // console.log(list);
    }
  };

  const deleteItems = (id) => {
    // console.log("delete successfully");
    setaddlist((oldItems) => {
      return oldItems.filter((value) => {
        return (id !== value.id);
      })
    })
  }

  const editItems = (id) => {
    // console.log("edit successfully");
    const newEditItems = addlist.find((value) => {
      return (id === value.id)
    })

    // console.log(newEditItems);
    setToggleBtn(false);

    //bring text to be edited in input box;
    setlist(newEditItems.name);

    //update edit item
    setUpdateEditItem(id);

  }
  return (
    <div className="todo-List">
      <div className="center-div">
        <br />
        <h1>TODO List</h1>
        <br />
        <input type='text' value={list} placeholder='Add task!' onChange={AddItems} />
        {ToggleBtn ? <button onClick={handleClick}> + </button> : <button onClick={handleClick}>🖋️</button>}
        <ol>
          {
            addlist.map((value) => {
              return <Todoitems key={value.id} uni={value.id} nameItem={value.name} onSelect={deleteItems} onEdit={editItems} />
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
