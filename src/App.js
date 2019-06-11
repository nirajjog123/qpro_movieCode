import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import MvList from './mList/mList';
import MvAdd from './mAdd/mAdd';
import MvInfo from './mInfo/mInfo';
class App extends React.Component{

  constructor(){
    super();
    this.state={
      data:''
    }
  }
  render(){
  return (
    <div className="App">

    <Router>
    <div className='topnav'>  
        <Link to="/list">Movie List</Link>
        <Link to="/add">Movie Add</Link>
        <Link to="/info">Movie Info</Link>
   </div>
      <Route exact path='/list' component={MvList}></Route>
      <Route  path='/add' component={MvAdd}></Route>
      <Route  path='/info' component={MvInfo}></Route>
      
      </Router>    
    </div>
  );
}
}

export default App;
