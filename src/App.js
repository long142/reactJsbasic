import logo from "./logo.svg";
import "./App.css";
import Color from "./components/color";
import TodoList from "./features/Todo/components/TodoList";
import TodoFeature from "./features/Todo/pages";
import AlbumFeature from "./features/AlBum/pages";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* <Color /> */}
      <TodoFeature />
      {/* <AlbumFeature /> */}
      {/* <ColorBox />
      <Counter /> */}
    </>
  );
}

export default App;
