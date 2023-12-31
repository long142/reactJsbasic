import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../components/TodoList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import ListPage from "./ListPage";
import DetailPage from "./DetailPage";

TodoFeature.propTypes = {};

// function TodoFeature(props) {
//   return (
//     <>
//       hihihi
//       <Routes>
//         {/* <Route path="/albums" element={<h1>hihi</h1>} /> */}
//         <Route path="/todos/" element={<ListPage />} />
//         <Route path="/todos/:todoId" element={<DetailPage />} />
//       </Routes>
//     </>
//   );
// }

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code ",
      status: "new",
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  // cập nhật state vị trí
  const handleTodoClick = (todo, idx) => {
    //clone current array to the new one(with object array)
    const newTodoList = [...todoList];

    console.log(todo, idx);
    //toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    //update todo list
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };
  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  console.log(renderedTodoList);

  return (
    <>
      <div>
        <h3>Todo list</h3>
        <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      </div>
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Compeleted</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </>
  );
}

export default TodoFeature;
