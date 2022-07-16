import Header from "./Header";
import Content from "./Content";
import Add from './Add';
import Footer from "./Footer";
import { useState } from 'react';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todolist')));
  const [newItem, setNewItem] = useState('');

  const saveItems = newItems => {
    setItems(newItems);
    localStorage.setItem('todolist', JSON.stringify(newItems))
  };

  const addItem = text => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id,
      checked: false,
      text
    };
    const listItems = [...items, myNewItem];
    saveItems(listItems);
  };

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    saveItems(listItems);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header />
      <Content items={items} handleDelete={handleDelete} />
      <Add newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
}

export default App;
