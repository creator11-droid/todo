import { useState } from "react";

const SingleItem = ({ object, deleteItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={object.completed}
        onChange={() => editItem(object.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: object.completed && "line-through",
        }}
      >
        {object.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteItem(object.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
