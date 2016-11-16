//A reducer is a function, and return a piece of the application state.
//Tantos reducers como trozos de estado diferentes pueda tener la aplicación.
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//Cada reducer defineix una part de l'estat de l'aplicació
//Son els reducers els que s'encarreguen de cnaviar l'estat de l'aplicació tota la estona i o fan
//mitjançant l'ús d'accions.
const rootReducer = combineReducers({
  books: BooksReducer,  
  activeBook: ActiveBook
});

export default rootReducer;
