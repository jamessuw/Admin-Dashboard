import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Login from './Components/Login/Login'; // Check the correct path to your Login component
import AdminDash from './Components/AdminDash/AdminDash'; 
function App() {
  return (
    <Router>
      <Routes>
    
      <Route path="login" element={<Login />} />
        <Route path="admin" element={<AdminDash />} />
  </Routes>
    </Router>
  );
}

export default App;
