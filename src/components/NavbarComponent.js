import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import "./NavbarComponent.css";
import logo from "./Logo.png";

const NavbarComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const courses = {
    "Web Development": ["React", "Node.js", "HTML & CSS", "JavaScript"],
    "Data Science": ["Python", "Machine Learning", "Deep Learning", "Statistics"],
    "Design": ["Graphic Design", "UI/UX", "Photoshop", "Illustrator"],
    "Marketing": ["SEO", "Content Marketing", "Social Media", "Email Marketing"],
    "Finance": ["Investing", "Accounting", "Financial Analysis", "Cryptocurrency"],
    "Photography": ["Portrait Photography", "Photo Editing", "Lighting Techniques", "Drone Photography"]
  };

  return (
    <>
      {/* First Navbar */}
      <Navbar className="sticky-top main-navbar">
        <Container className="d-flex align-items-center">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {Object.keys(courses).map((category) => (
                <NavDropdown.Item key={category} href="#action/3.1">{category}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Second Navbar */}
      <Navbar bg="light" expand="lg" className="sub-navbar">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Explore" id="explore-dropdown" className="explore-dropdown">
              <div className="dropdown-content d-flex">
                <div className="dropdown-left bg-offwhite p-3">
                  {Object.keys(courses).map((category) => (
                    <NavDropdown.Item 
                      key={category} 
                      onMouseEnter={() => setSelectedCategory(category)}
                      className={`d-flex align-items-center px-3 py-2 ${selectedCategory === category ? "bg-light-beige" : ""}`}
                    >
                      <span className="me-2 small-arrow">▶</span> {category}
                    </NavDropdown.Item>
                  ))}
                </div>
                <div className="dropdown-right p-3">
                  {selectedCategory ? (
                    <>
                      <h5 className="fw-bold text-dark mb-2">{selectedCategory}</h5>
                      <hr className="dropdown-divider" />
                      <div className="course-options">
                        {courses[selectedCategory].map((course) => (
                          <div key={course} className="py-1 text-dark">{course}</div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="dropdown-placeholder">Hover over a category to see courses</p>
                  )}
                </div>
              </div>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ms-auto">
            <FormControl type="search" placeholder="Search" className="me-2 small-text" />
            <Button variant="outline-primary" className="small-text">Search</Button>
          </Form>
          <Button className="job-channel-btn small-text">Job Channel</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
