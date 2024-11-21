import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import BookListPage from './Components/BookListPage';
import ContactUsPage from './Components/ContactUsPage';
import AboutUsPage from './Components/AboutUsPage';
import StoryPage from './Components/StoryPage';
import Login from './Components/Login';
import Admin from './Components/Admin';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookListPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoutes><Admin /></ProtectedRoutes>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
