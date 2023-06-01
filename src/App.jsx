import { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoApp from "./TodoApp";

const getLocalItems = () => {
  let list = localStorage.getItem("items");
  console.log("list ", list);
  if (list) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

function App() {
  const [inputData, SetInputData] = useState();
  const [items, setInput] = useState(getLocalItems());
  const [isFocus, setIsFocus] = useState(false);
  const inputFocus = useRef();

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, [isFocus]);

  useEffect(() => {
    if (isFocus) {
      inputFocus.current.focus();
    }
  }, [isFocus]);

  const detectKeyDown = (e) => {
    if (e.key === " ") {
      setIsFocus(!isFocus);
    }
  };

  // const
  const addItem = () => {
    if (inputData) {
      setInput([...items, inputData]);
      SetInputData("");
    } else {
    }
  };

  const removeTodo = (id) => {
    console.log(id);
    const updatedItem = items.filter((ele, index) => {
      console.log(ele);
      return index !== id;
    });
    setInput(updatedItem);
  };

  const reset = () => {
    setInput([]);
  };
  const undoItem = () => {
    if (items) {
      setInput(JSON.parse(localStorage.getItem("items")));
    }
  };
  return (
    <>
      {console.log(items)}
      <input
        type="text"
        placeholder="click space(_) to write"
        value={inputData}
        ref={inputFocus}
        onChange={(e) => SetInputData(e.target.value)}
      />
      <button onClick={() => addItem()}>add</button>
      <ul>
        {items.map((data, i) => (
          <li key={i}>
            {data}
            <button onClick={() => removeTodo(i)}>delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => reset()}>reset</button>
      <button onClick={() => undoItem()}>undo</button>
    </>
  );
}

export default App;
