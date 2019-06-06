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
      <Route exact path='/list' component={MvList}></Route>
      <Route  path='/add' component={MvAdd}></Route>
      <Route  path='/info' component={MvInfo}></Route>
      
      </Router>    
    </div>
  );
}

export default App;
