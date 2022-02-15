import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Character } from './Components/pages/Character';
import { Search } from './Components/Search';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
};

export default App;
