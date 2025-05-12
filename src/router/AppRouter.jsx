import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/user" element={<User />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default AppRouter;
