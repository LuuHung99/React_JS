import {React} from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoList from './components/Todo/index';
import HomePageList from './components/Home/index';
// import StateComponent from './components/State/index';

function App() {
  return (
    <div>
      <TodoList />
      <HomePageList />
    </div>
  );
}

export default App;
