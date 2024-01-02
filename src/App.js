import "../src/styles/main.scss";
import TodoFeature from "./features/Todo/pages";
import AlbumFeature from "./features/AlBum/pages";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import productApi from "./api/productApi";
import NotFound from "../src/features/NotFound/NotFound";
import DetailPage from "./features/Todo/pages/DetailPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todos ">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/albums">Albums</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/todos">
          <Route path="" element={<TodoFeature />} />
          <Route path=":todoId" element={<DetailPage />} />
        </Route>

        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
