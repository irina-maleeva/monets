// import logo from './logo.svg';
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';




class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" exact element={<MainPage/>} />
        </Routes>
        {/* <Route path="/list/:id" exact component={ListPage} /> */}
      </div>
    );
  }
}

export default App;