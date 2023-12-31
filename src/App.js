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
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Performances from "./pages/Performances";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Setting";
import Support from "./pages/Support";
import Sidebar from "./components/Sidebar";
import NotFound from "../src/features/NotFound/NotFound";
import DetailPage from "./features/Todo/pages/DetailPage";

function App() {
  return (
    // <router>
    //   <div className="App">
    //     <Sidebar />
    //     <Routes>
    //       <Route path="/" element={<Dashboard />} />
    //       <Route path="/news" element={<News />} />
    //       <Route path="/performance" element={<Performances />} />
    //       <Route path="/settings" element={<Settings />} />
    //       <Route path="/support" element={<Support />} />
    //       <Route path="/transactions" element={<Transactions />} />
    //     </Routes>
    //   </div>
    // </router>
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
