import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Gallery from './components/Gallery';
import About from './components/Aboutus';
import Footer from './components/Footer';
import User from './components/User';
import Admin from './components/Admin';
import Contactus from './components/Contactus';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Feedback from './components/Feedback';
import Usernavbar from './components/Usernavbar';
import './App.css';

function Main() {
  // useLocation must be inside Router
  const location = useLocation();
  
  // Check if current path matches dashboard, profile, or feedback
  const isUserSection = location.pathname === '/dashboard' || 
                        location.pathname === '/profile' || 
                        location.pathname === '/feedback';

  return (
    <div>
      {/* Conditionally render Navbar or Usernavbar */}
      {isUserSection ? <Usernavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    async function getAllUsers() {
      try {
        const response = await axios.get('http://127.0.0.1:8001/api/user');
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllUsers();
  }, []);

  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
