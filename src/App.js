import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Login from './Components/Login/Login'; // Check the correct path to your Login component
import AdminDash from './Components/AdminDash/AdminDash'; 
import CreateForm from './Components/CreateForm/CreateForm'; // Import CreateForm component

function App() {
  return (
    <Router>
      <Routes>
    
      <Route path="login" element={<Login />} />
        <Route path="admin" element={<AdminDash />} />
        
{/* This is Side Nav Routes render APP */}

        <Route path="/create-form" element={<CreateForm />} /> {/* Route to CreateForm component */}

  </Routes>
    </Router>
     
     
  
  );
}

export default App;
