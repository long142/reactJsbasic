import logo from "./logo.svg";
import "./App.css";
import Color from "./components/color";
import TodoList from "./features/Todo/components/TodoList";
import TodoFeature from "./features/Todo/pages";
import AlbumFeature from "./features/AlBum/pages";

function App() {
  return (
    <>
      {/* <Color /> */}
      {/* <TodoFeature /> */}
      <AlbumFeature />
    </>
  );
}

export default App;
