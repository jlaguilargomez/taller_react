import React, {useState} from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    {content: '💻 Publicar #100DaysOfCode'},
    {content: '🎇 Salvar a la humanidad del asteroide FT3'},
    {content: '🍳 Ir a comprar al mercadona'}
  ]);

  return (
    <div className="App">
      <h1>To do List</h1>
      <ul className='ItemList'>
        {items.map((item, index) => (
          <li key={index} className='Item'>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
