import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddMovement from './components/AddMovement/AddMovement';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import MovementList from './components/MovementList/MovementList';
import EditMovement from './components/EditMovement/EditMovement';
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/movements" element={<MovementList />} />
        <Route path="/add" element={<AddMovement />} />
        <Route path="/edit/:id" element={<EditMovement />} />
      </Routes>
    </>
  );
}

export default App;
