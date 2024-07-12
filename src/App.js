
import './App.css';
import Forms from './components/Form';
import Todos from './components/Todos';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';


function App() {
  const [editVisibility,setEditVisibility] = useState(false);
  const [editTodo,setEditTodo]= useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);

  const handleEditClick = (todo)=>{
    setEditVisibility(true);
    setEditTodo(todo)
  }

  const cancelUpdate =()=>{
    setEditVisibility(false);
    
  }
  return (
    <div className="App">
    <h1>TODO-APP</h1>
    <Forms editVisibility={editVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}></Forms>
    <Todos  handleEditClick={handleEditClick} editVisibility={editVisibility}></Todos>
    {todos.length > 1 && (
  <div className='btn'>
  <Button  onClick={()=>dispatch(deleteAll())} variant="info">DELETE ALL</Button>
  </div>
    )}

    </div>
  );
}

export default App;
