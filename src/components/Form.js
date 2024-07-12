import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { addToto, handleEditSubmit } from '../redux/todoapp/actions';

export default function Forms({editVisibility,editTodo,cancelUpdate}) {

  const dispatch = useDispatch();
    const [todoValue,setTodoValue] = useState('');
    const [editValue,setEditValue] = useState('');

    useEffect(()=>{
       setEditValue(editTodo.todo)
    },[editTodo])

    const handelSubmit = (e)=>{
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj ={
            id: time,
            todo: todoValue,
            completed: false
        }
        setTodoValue('');
        dispatch(addToto(todoObj))
    }

    const editSubmit = (e)=>{
      e.preventDefault();
      let editedObj={
        id: editTodo.id,
        todo: editValue,
        completed: false
      }
      dispatch(handleEditSubmit(editedObj))
    }
  return (
 
    <div className='form'>
         <>
    {editVisibility === false ? (
          <Form onSubmit={handelSubmit}>
          <h6>Add your todo-items</h6>
          <InputGroup className="mb-3">
        
            <Form.Control
              placeholder="Write-Todo"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type='text'
               value={todoValue}
               onChange={(e)=>setTodoValue(e.target.value)}
               required
            />
            <Button type='submit' variant="dark" id="button-addon2">
              ADD
            </Button>
          </InputGroup>
          </Form>
    ):(    <Form  onSubmit={editSubmit}>
      <h6>Update your todo-item</h6>
      <InputGroup className="mb-3">
    
        <Form.Control
          placeholder="Write-Todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type='text'
           value={editValue||""}
           onChange={(e)=>setEditValue(e.target.value)}
           required
        />
        <Button type='submit' variant="secondary" id="button-addon2">
          UPDATE
        </Button>
      </InputGroup>
      <Button type='button' variant="dark" onClick={cancelUpdate}>BACK</Button>
      </Form>)}
    </>
  
    </div>
  )
}
