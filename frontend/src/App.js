// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import LoginPage from './accounts/Login';
import LogoutPage from './accounts/Logout';  
import RegisterPage from './accounts/Register'; 
import PasswordChange from './accounts/PasswordChange'; 
import PasswordReset from './accounts/PasswordReset'; 



import LandingPage from './ecommerce/Home';
import ProductPage from './ecommerce/Products';
import SolutionsPage from './ecommerce/Solutions';
import PartnersPage from './ecommerce/Partners';
import NewsPage from './ecommerce/News';
import SupportsPage from './ecommerce/Supports';
import TrainingPage from './ecommerce/Training';
// Sections
import AnnouncementsSection from './snippets/Announcements';
import HeaderSection from './snippets/Header';
import FooterSection from './snippets/Footer';
import CopyWrite from './snippets/Copywrite';

function App() {
  return (
    <Router>
      <div>
        <AnnouncementsSection />
        <HeaderSection />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/support" element={<SupportsPage />} />
          <Route path="/training" element={<TrainingPage />} />


          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <FooterSection />
        <CopyWrite />
      </div>
    </Router>
  );
}

export default App;
