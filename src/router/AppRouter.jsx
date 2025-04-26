import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
// import Transactions from "../pages/Transactions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        {/* <Route path="/transactions" element={<Transactions />} /> */}
        {/* <Route path="*" element={<Error />} />{" "} */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default AppRouter;
