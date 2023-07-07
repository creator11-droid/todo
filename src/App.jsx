import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Item from "./Item";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    list = JSON.parse(localStorage.getItem("lists"));
  } else {
    list = [];
  }
  return list;
};
const setLocalStorage = (item) => {
  localStorage.setItem("lists", JSON.stringify(item));
};
function App() {
  const [item, setItem] = useState(getLocalStorage);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...item, newItem];
    setItem(newItems);
    setLocalStorage(newItems);
    toast.success("item added successfully");
  };

  const deleteItem = (itemId) => {
    const newItem = item.filter((object) => object.id !== itemId);
    setItem(newItem);
    setLocalStorage(newItem);
    toast.success("item deleted");
  };

  const editItem = (itemId) => {
    const newItems = item.map((object) => {
      if (itemId === object.id) {
        const newItem = { ...object, completed: !object.completed };
        return newItem;
      }
      return object;
    });
    setItem(newItems);
    setLocalStorage(newItems);
    toast.success("todo completed ");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Item item={item} deleteItem={deleteItem} editItem={editItem} />
    </section>
  );
}

export default App;
