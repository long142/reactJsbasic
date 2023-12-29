import "../src/styles/main.scss";
import TodoFeature from "./features/Todo/pages";
import AlbumFeature from "./features/AlBum/pages";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Performances from "./pages/Performances";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Setting";
import Support from "./pages/Support";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/performance" element={<Performances />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </router>
  );
}

export default App;
