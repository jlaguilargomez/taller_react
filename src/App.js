import React, {useState} from 'react';
import Item from './components/Item';
import ItemForm from './components/ItemForm';

import './App.css';

function App() {

  const addItem = content => {
    // Con el spread hacemos una copia del array "items"
    const newItems = [...items];
    newItems.unshift({ content: content , isCompleted: false});
    setItems(newItems);
  };

  const completeItem = (index) => {
    const newItems = [...items];
    newItems[index].isCompleted = !newItems[index].isCompleted;
    setItems(newItems);
  };

  const [items, setItems] = useState([
    {
      content: '💻 Publicar #100DaysOfCode',
      isCompleted: false
      
    },
    {
      content: '🎇 Salvar a la humanidad del asteroide FT3',
      isCompleted: false
    },
    {
      content: '🍳 Ir a comprar al mercadona',
      isCompleted: false
    },
    {
      content: '🙌🏻 Darme un masaje en la espalda: estoy jodido',
      isCompleted: false
    }
  ]);

  return (
    <div className="App">
      <h1>To do list</h1>
      <ItemForm addItem={addItem} />
      <ul className='ItemList'>
        {items.map((item, index) => (
          <Item
          key={index}
          index={index}
          content={item.content}
          completeItem={completeItem}
          isCompleted={item.isCompleted}
        />
        ))}
      </ul>
    </div>
  );
}

export default App;
