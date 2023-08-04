import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState({description: '', date: '', status: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: '', status: ''});
  }
  const clearTodos = () => {
    setTodos([]);
  };
  return (
    <>
      <h3>My Todolist</h3>
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>
        Clear
      </button>
      <table>
        <tbody>
        {
        todos.map((todo, index) => 
          <tr key={index}>
            <td>{todo.description}</td>
            <td>{todo.date}</td>
            <td>{todo.status}</td>
          </tr>)
        }
        </tbody> 
      </table>
    </>
  );
}

export default App;


/* import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddBooks from './AddBooks';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [books, setBooks] = useState([]);

  const columnDefs = [
    { field: "title", sortable: true, filter: true },
    { field: "author", sortable: true, filter: true },
    { field: "year", sortable: true, filter: true },
    { field: "isbn", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    { 
      headerName: '',
      field: 'id',
      width: 90,
      cellRenderer: params => 
      <IconButton onClick={() => deleteBook(params.value)} size="small" color="error">
        <DeleteIcon />
      </IconButton> 
    }
  ];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch("https://bookstore-647c0-default-rtdb.firebaseio.com/books.json")
      .then((response) => response.json())
      .then((data) => addKeys(data))
      .catch((err) => console.error(err));
  };

    // Add keys to the objects
    const addKeys = (data) => {
      const keys = Object.keys(data);
      const valueKeys = Object.values(data).map((item, index) => 
      Object.defineProperty(item, 'id', {value: keys[index]}));
      setBooks(valueKeys);
    }

  const addBook = (newBook) => {
    fetch('https://bookstore-647c0-default-rtdb.firebaseio.com/books.json',
    {
      method: 'POST',
      body: JSON.stringify(newBook)
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }
  
  const deleteBook = (id) => {
    fetch(`https://bookstore-647c0-default-rtdb.firebaseio.com/books/${id}.json`,
    {
      method: 'DELETE',
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          Booklist
        </Typography>
      </Toolbar>
    </AppBar> 
    <AddBooks addBook={addBook}/>  
    <div className="ag-theme-material" style={{ height: 400, width: 1200 }}>
      <AgGridReact 
        rowData={books}
        columnDefs={columnDefs}
      />
    </div>
  </>
  );
}

export default App;
 */