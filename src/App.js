//import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

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

  const completeTodos = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[indexTodo].completed = true;
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
