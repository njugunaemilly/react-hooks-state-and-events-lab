import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selected, setSelected] = useState("All")
  function handleChange(e){
    setSelected(e.target.value)
  }

  const listedItems = items.filter((item)=> {
    if (selected === "All"){
      return true
    }
    return item.category === selected
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {listedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
