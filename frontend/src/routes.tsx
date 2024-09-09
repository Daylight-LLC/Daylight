import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';
import Projects from './pages/Projects';
import Issues from './pages/Issues';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ErrorPage from './pages/ErrorPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="teams" element={<Teams />} />
      <Route path="projects" element={<Projects />} />
      <Route path="issues" element={<Issues />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for undefined paths */}
    </Route>
  </Routes>
);

export default AppRoutes;
