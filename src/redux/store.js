import {configureStore} from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer';


export const store = configureStore({
 reducer: 
   rootReducer,
    
 

},
 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)