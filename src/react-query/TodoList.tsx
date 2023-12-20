import { useState } from "react";
import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const [user, setUser] = useState<number>();
  const { data: todos, error, isLoading } = useTodos(user);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => setUser(parseInt(event.target.value))}
        value={user}
        className="form-control mb-2"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {todos?.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
