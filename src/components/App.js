import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Starts from "./Starts";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== 
    id));
  }

  function handleToggleItem(id) {
    setItems((items) => 
      items.map(item => 
        item.id === id ? {...item, packed: !item.packed} 
        : item 
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure?");

    if (confirmed) setItems([]);

    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList 
      items={items} 
      onDeleteItem ={handleDeleteItems} 
      onToggleItems={handleToggleItem} 
      onClearList={handleClearList}
      />
      <Starts items={items} />
    </div>
  );
}

