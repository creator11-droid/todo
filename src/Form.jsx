import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return toast.error("please provide value");
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
      </div>
      <button type="submit" className="btn">
        Add item
      </button>
    </form>
  );
};
export default Form;
