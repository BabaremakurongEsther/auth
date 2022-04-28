import React from 'react';
import { Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/register';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />

    </Routes>
  );
}
export default App;