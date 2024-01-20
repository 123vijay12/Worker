import React from 'react';
import Electronics from './pages/Electronics/electronics.js';
import Civil from './pages/civil/civil.js'
import Index from './pages/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDetails from './pages/EmployeeDetails/userDetails.js';
import Map from './pages/Map/Map.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}  exact/>
      <Route path="/civil" element={<Civil />} />
      <Route path="/electronics" element={<Electronics exact  />} />
      <Route path="/employe/:id" element={<UserDetails exact />} />
      <Route path="/employee/:id/map" element={<Map exact />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
