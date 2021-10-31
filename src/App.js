import React, {useState} from 'react';
import List from './components/Library'

function App() {
  const [book, setBook] = useState('');
  const [list, setList] =  useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('it clicked')
}

  return (
    <div className="book-container">
      <h1>Custom Library</h1>
      <form className='form'>
        <label htmlFor="">Book Name: </label>
        <input className="book-name" type="text" />
        <label htmlFor="">Author: </label>
        <input type="text" />
        <label htmlFor="">Genre: </label>
        <input type="text" />
        <button type="submit" className='btn' onClick={handleSubmit}>
          click me
        </button>
      </form>
      <ul>
        <li>{book}</li>
      </ul>
    </div>
  
    
  );
}

export default App;
