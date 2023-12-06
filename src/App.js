import logo from "./logo.svg";
import "./App.css";
import Color from "./components/color";
import TodoList from "./features/Todo/components/TodoList";
import TodoFeature from "./features/Todo/pages";

function App() {
  return (
    <>
      {/* <Color /> */}
      <TodoFeature />
    </>
  );
}

export default App;
