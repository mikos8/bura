import logo from './logo.svg';
import './App.css';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-status-filter";
import TodoList from "./components/todo-list";
import './index.css';

function App() {
  const todoData = [
    {label: 'drink coffee', important: true},
    {label: 'home work', important: false},
    {label: 'lessons watch', important: true},
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData}/>
    </div>
  );
}

export default App;
