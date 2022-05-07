// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';




class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={MainPage} />
        {/* <Route path="/list/:id" exact component={ListPage} /> */}
      </div>
    );
  }
}

export default App;