import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Character } from './Components/Character';
import { SearchPage } from './Components/SearchPage';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
};

export default App;
