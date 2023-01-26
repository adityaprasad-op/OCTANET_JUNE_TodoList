import React,{useState} from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [text,setText]=useState("");
  const [items,setItems]=useState([]);

  function handleChange(event){
    const newValue=event.target.value;
    setText(newValue);
  }

  function addItem(){
    setItems((prevItems)=>{
      return[...prevItems,text];
    });
    setText("");
  }

  function deleteItem(){

  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem=> 
          <ToDoItem
            text={todoItem}
            onChecked={deleteItem}
          />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
