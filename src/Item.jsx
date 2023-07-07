import SingleItem from "./SingleItem";

const Item = ({ item, deleteItem, editItem }) => {
  return (
    <div className="items">
      {item.map((object) => {
        return (
          <SingleItem
            key={object.id}
            object={object}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};
export default Item;
