import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import MvList from './mList/mList';
import MvAdd from './mAdd/mAdd';
import MvInfo from './mInfo/mInfo';
function App() {
  return (
    <div className="App">
    <Router>
    <nav>
          <ul>
            <li>
              <Link to="/list">Movie List</Link>
            </li>
            <li>
              <Link to="/add">Movie Add</Link>
            </li>
            <li>
              <Link to="/info">Movie Info</Link>
            </li>
          </ul>
        </nav>
      <Route exact path='/list' component={MvList}></Route>
      <Route  path='/add' component={MvAdd}></Route>
      <Route  path='/info' component={MvInfo}></Route>
      
      </Router>    
    </div>
  );
}

export default App;
