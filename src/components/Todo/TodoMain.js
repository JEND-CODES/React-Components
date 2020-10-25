import React, { useEffect, useState } from "react";

import styled from 'styled-components';
// Deuxième intégration de Todos components :
// Tuto suivi Todo Component : https://www.youtube.com/watch?v=nUl5QLkVdvU
// Repo Git du Tuto : https://github.com/samgamage/todo-react
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function TodoMain() {
  // Voir documentation sur les HOOKS : https://fr.reactjs.org/docs/hooks-overview.html#:~:text=useState%20retourne%20une%20paire%20%3A%20la,ancien%20%C3%A9tat%20et%20le%20nouveau.
  // Hooks -> "useState" retourne une paire : la valeur de l'état actuel et une fonction qui vous permet de la mettre à jour. Vous pouvez appeler cette fonction depuis un gestionnaire d'événements, par exemple. Elle est similaire à "this.setState" dans une classe, à ceci près qu'elle ne fusionne pas l'ancien état et le nouveau.
  const [todos, setTodos] = useState([]);

  // Le Hook d’effet, useEffect, permet aux fonctions composants de gérer des effets de bord. Il joue le même rôle que componentDidMount, componentDidUpdate, et componentWillUnmount dans les classes React, mais au travers d’une API unique.
  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <Box>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
   </Box>
  );
}

export default TodoMain;

const Box = styled.section `
  margin-top:75px;
  border: 0px solid cornflowerblue;
  padding: 20px;
  text-align:center;
  
`;