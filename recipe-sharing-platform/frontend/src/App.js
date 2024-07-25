// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UploadRecipe from './components/UploadRecipe';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing Platform</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<UploadRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
