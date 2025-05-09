import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Route protégée
import { useDispatch } from "react-redux";
import ProtectedRoute from "../components/login/ProtectedRoute";
import { getUserProfile } from "../redux/slice/userSlice"; // Importer l'action

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUserProfile()); // Récup le profil de l'utilisateur
    }
  }, [dispatch]);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/user" element={<User />} /> */}
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default AppRouter;
