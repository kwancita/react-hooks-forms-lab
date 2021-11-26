import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [submittedItem, setSubmittedItem] = useState([]);
  //submit new item
  function handleSubmit(event){
    event.preventDefault();
    const formNewItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    const newItemArray = [...submittedItem, formNewItem];
    setSubmittedItem(newItemArray);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;


