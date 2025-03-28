import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import CourseDetail from "./components/CourseDetail";
import Footer from "./components/Footer";
import "./App.css";
import CoursePage from "./components/CoursePage";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <>
             
              <CoursePage />
            </>
          }
        />
        {/* Corrected Course Detail Route */}
        <Route path="/course-detail/:id" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
