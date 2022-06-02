import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"
import Todo from './components/Todo';
import TodoDetils from './components/TodoDetils';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/todo/:id" element={<TodoDetils/>}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo/>}></Route>

      </Routes>


    </div>
  );
}

export default App;
