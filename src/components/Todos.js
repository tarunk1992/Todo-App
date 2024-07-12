import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { removeTodo , } from '../redux/todoapp/actions';


export default function Todos({handleEditClick,editVisibility}) {
   const dispatch = useDispatch();
    const todos = useSelector((state)=>state.operationsReducer);
    console.log('todo',todos);
  return (
    <div className='todo'>
      {
        todos.map((todo)=>(
          <div key={todo.id} className='todo-box'>
        <div className='content'>
     
 
            <h5 style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}</h5>
        </div>
        <div className='actions-box'>
     {
      editVisibility===false&&(
        <>
           <Button variant="primary" onClick={()=>handleEditClick(todo)}>UPDATE</Button>
        <Button variant="danger"  onClick={()=>dispatch(removeTodo(todo.id))}>DELETE</Button>
                
        </>
      )
     }
             
        </div>
    </div>

        ))
      }
      
    </div>
  )
}
