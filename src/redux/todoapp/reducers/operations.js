import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO } from "../actions";

const initialState =[
    {id: 1, todo: 'Buy Laptop', completed: false},
    {id: 2, todo: 'Master Redux', completed: false},
    {id: 3, todo: 'javaScript', completed: false},
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return[...state, action.payload];
        case DELETE_ALL:
            return [];
       
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload)
            return filteredTodos;
   
     
        

            case UPDATE_TODO:
                return state.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, ...action.payload }
                        : todo
                );
    




    default: return state;
    }

}
