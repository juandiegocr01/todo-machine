//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";

/*
const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Que es esto', completed: false },
  { text: 'ayuda', completed: false },
  { text: 'cebolla', completed: true },
]; */

function useLocalStorage(itemName, initialValue){

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;


  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  

}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  
  const [searchValue, setSearchValue] = React.useState('');
 
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

  }


  

  const completeTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
    
  };

 

  return (
   <AppUI
   totalTodos={totalTodos}
   completedTodos={completedTodos}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   searchedTodos={searchedTodos}
   completeTodo={completeTodo}
   deleteTodo={deleteTodo}
   />
  );
}

export default App;
