import "./App.css";
import TodoFeature from "./features/Todo/pages";
import AlbumFeature from "./features/AlBum/pages";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos ">Todos</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>
    </>
  );
}

export default App;
