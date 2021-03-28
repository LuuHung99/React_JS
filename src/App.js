import {React} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import TodoList from './components/Todo/index';
// import HomePageList from './components/Home/index';
// import { Route, Switch } from 'react-router-dom';
// import categoryApi from './components/api/categoryApi';
// import counterRex from './components/Redux/index';
// import StateComponent from './components/State/index';
// import ReminderComplete from './components/ReminderComplete/index';
// import ToursComplete from './components/ToursComplete/index';
// import ColorBox from './components/ColorBox/index';
// import TodoForm from './components/TodoForm/todoForm';
// import FetchApi from './components/api/fetchApi';
import Colock from './components/Clock/clock';
import Color from './components/Color/color';

function App() {
  // useEffect(() => {
  //   const fetchCovid = async () => {
  //     const param = {
  //       _limit: 10
  //     }
  //     const categoryList = await categoryApi.getAll(param);
  //     console.log(categoryList);
  //   }
  //   fetchCovid();
  // }, []);

  return (
    <div>
      
      <Colock />
      <Color />
      {/* <TodoList /> */}
      {/* <FetchApi /> */}

      {/* <Switch>
        <Route path="/" component={counterRex} exact />
        <Route path="/home" component={HomePageList} />
        <Route path="/todo" component={TodoList} />
      </Switch> */}
    </div>
  );
}

export default App;
