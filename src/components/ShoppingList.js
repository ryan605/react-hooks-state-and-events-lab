import React ,{useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [itemLi, setItemLi] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState('All')
  console.log(selectedCategory)
  const itemToDisplay = itemLi.filter(item=>{
    if(selectedCategory === 'All'){
      return true
    }else{
      return item.category  === selectedCategory
    }
  })
  console.log(itemToDisplay)

  function getValue(e){
  const val = e.target.value
  setSelectedCategory(val)

  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"onChange={getValue}>
          <option value="All" >Filter by category</option>
          <option value="Produce" >Produce</option>
          <option value="Dairy" >Dairy</option>
          <option value="Dessert" >Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;