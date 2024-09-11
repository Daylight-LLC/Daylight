import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './layout';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';
import Projects from './pages/Projects';
import Issues from './pages/Issues';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ErrorPage from './pages/ErrorPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    <Route path="/" element={<Navigate to="/login" />} /> 
    <Route path="app" element={<App />}>
      <Route index element={<Navigate to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="teams" element={<Teams />} />
      <Route path="projects" element={<Projects />} />
      <Route path="issues" element={<Issues />} />
      <Route path="*" element={<ErrorPage />} /> 
    </Route>
    <Route path="*" element={<ErrorPage />} /> 
  </Routes>
);

export default AppRoutes;
