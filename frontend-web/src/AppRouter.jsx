import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  </Router>
);

export default AppRouter;
