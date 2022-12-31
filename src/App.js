//import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Que es esto', completed: false },
  { text: 'ayuda', completed: false },
];

function App() {

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
