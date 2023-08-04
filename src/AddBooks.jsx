/* import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddBooks(props) {
    const [open, setOpen] = useState(false);
    const [books, setBooks] = useState({description: '', date: '', priority: ''});

    const handleOpen = () => {
        setOpen(true);
      }
    
      const handleClose = () => {
        setOpen(false);
      }
      const handleSave = () => {
        props.addBook(books);
        handleClose();
      }
      const inputChanged = (event) => {
        setBooks({...books, [event.target.name]: event.target.value});
      }
  return(
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add book
      </Button>
      <Dialog open={open}> 
        <DialogTitle>New book</DialogTitle>
        <DialogContent>
        <TextField
            name="title"
            value={books.title}
            onChange={inputChanged}
            margin="dense"
            label="title"
            fullWidth
          /> 
         <TextField
           name="author"
           value={books.author}
           onChange={inputChanged}
           margin="dense"
           label="author"
           fullWidth
         /> 
         <TextField
           name="year"
           value={books.year}
           onChange={inputChanged}
           margin="dense"
           label="year"
           fullWidth
         /> 
           <TextField
           name="isbn"
           value={books.isbn}
           onChange={inputChanged}
           margin="dense"
           label="isbn"
           fullWidth
         /> 
           <TextField
           name="price"
           value={books.price}
           onChange={inputChanged}
           margin="dense"
           label="price"
           fullWidth
         /> 
        </DialogContent>
        <DialogActions>
        <Button color="primary" onClick={handleClose}>Cancel</Button>
          <Button color="primary" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog> 
    </>
  );
}

export default AddBooks; */