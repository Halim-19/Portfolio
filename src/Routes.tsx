// Routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
//import About from './pages/About';
//import Login from './pages/Login';
//import Register from './pages/Register';
//import NotFound from './pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  <Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
