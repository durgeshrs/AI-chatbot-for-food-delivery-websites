import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login/Login';
import ProtectedRoute from './components/Login/ProtectedRoute.jsx';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        {token && <Sidebar />}
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          
          {/* Protect the routes */}
          <Route path="/add" element={<ProtectedRoute><Add url={url} /></ProtectedRoute>} />
          <Route path="/list" element={<ProtectedRoute><List url={url} /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders url={url} /></ProtectedRoute>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
