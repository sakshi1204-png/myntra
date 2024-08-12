import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/ProductData/ProductData';
import Header from './pages/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<Product/>} />
      
      </Routes>
    </div>
  );
}

export default App;
