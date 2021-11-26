import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //for search
  const [searchItem, setSearchItem] = useState("")
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  //function for filter search change
  function handleSearchChange(event) {
    setSearchItem(event.target.value)
  }
  
  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All")return true;
      return item.category === selectedCategory;  
  });

  itemsToDisplay = itemsToDisplay.filter((item)=>{
    return (item.name.toLowerCase().includes(searchItem.toLowerCase()))
    
  })


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


