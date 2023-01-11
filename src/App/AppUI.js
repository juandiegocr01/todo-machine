import React from "react";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function AppUI(){

    return(
        
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
  
        <TodoContext.Consumer>
          {({error, 
          loading, 
          searchedTodos, 
          completeTodo, 
          deleteTodo}) => {
            return (<TodoList>

              {error && <p>hubo un error...</p>}
              {loading && <p>Estamos cargando...</p>}
              {(!loading && !searchedTodos.length) && <p>Crea tu primera tarea</p>}
              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onDelete={() => deleteTodo(todo.text)}
                  onComplete={() => completeTodo(todo.text)}
                  
                />
                
              ))}
            </TodoList>);
          }}
        </TodoContext.Consumer>
  
        <CreateTodoButton />
      </React.Fragment>

        );

}

export { AppUI };