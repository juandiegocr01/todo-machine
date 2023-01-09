//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Que es esto', completed: false },
  { text: 'ayuda', completed: false },
  { text: 'cebolla', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
    
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
