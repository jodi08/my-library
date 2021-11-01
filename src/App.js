import React, {useState} from 'react';
import Library from './components/Library'
import Alert from './components/Alert'

function App() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([])
  const [author, setAuthor] =  useState('');
  const [genre, setGenre] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show:false, type:'', msg:''})


  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title) {
      showAlert(true, 'danger', "Please enter value")
    } else if(title && isEditing) {
      setList(list.map((item) => {
         if(item.id === editID) {
           return {...item, title:title}
         }
         return item;
      })
      );
      setTitle('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', "Value Changed")
      } else {
        const newItem = {id: new Date().getTime().toString(),title:title, author:author, genre:genre}
        setList([...list, newItem])
        setTitle('')
      }
  }

  const showAlert = (show = false, type="", msg="") => {
    setAlert(show, type, msg)
  }



  return (
    <div className="book-container">
      <h1 className='heading'>Add A New Book</h1>
      <form className='add-book-form'>
        <label htmlFor="">Book Name: </label>
        <input className="book-name" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="">Author: </label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <label htmlFor="">Genre: </label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}/>
        <button type="submit" className='btn' onClick={handleSubmit}>
          click me
        </button>
      <Library items={list}/>
      </form>
      {list.length === 0 && (
      <div className="library-container">
        <button className='clear-btn'>Clear Library</button>
      </div>
      )}
      
    </div>
  
    
  );
}

export default App;
