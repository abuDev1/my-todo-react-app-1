import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [text, setText] = useState("");

  const [check, setCheck] = useState(false);

  const deleteTodo = (indexOfDeletedItem) => {
    const filterTodos = todos.filter((todo, index) => {
      if (index === indexOfDeletedItem) {
        return false;
      }
      return true;
    });
    setTodos(filterTodos);
  };

  const makeFavorite = (indexOfMakingFavorite) => {
    const newTodos = todos.map((item, index) => {
      if (index === indexOfMakingFavorite) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    setTodos([{ text: text, favorite: false, done: check }, ...todos]);
    setText("");
    setCheck(false);
  };

  var handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div className="App">
      <Header />
      <Form text={text} addTodo={addTodo} setText={setText} />
      <input
        type="checkbox"
        checked={check}
        onChange={() => handleCheck()}
        className="checkbox"
      />
      <span>Mark</span>
      <Todos
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
