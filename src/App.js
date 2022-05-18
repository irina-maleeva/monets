// import logo from './logo.svg';
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import CoinPage from './pages/CoinPage/CoinPage';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/list" exact element={<ListPage />} />
          <Route path="/coinPage" exact element={<CoinPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;