import React, { useState } from "react";
import { FaStar, FaCalendarAlt, FaClock, FaLanguage, FaGraduationCap, FaBook, FaUsers, FaCertificate,FaTags,FaDollarSign } from "react-icons/fa";
import "./coursepage.css";

const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const reviews = [
    { name: "John Doe", rating: 5, date: "March 25, 2025", comment: "Great course! Very informative." },
    { name: "Jane Smith", rating: 4, date: "March 20, 2025", comment: "Well structured and easy to follow." },
  ];

  return (
    <div className="course-detail">
      <h1 className="course-title">React Mastery Course</h1>
      {/* Course Info Row (Like Your Screenshot) */}
      <div className="course-info">    <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/109/2024/09/CSE-Connect-Mentor-2048x1365.jpg" alt="Author" className="author-img" />

  <div className="info-box">
    <p className="info-title">Author</p>
    <p className="info-text">Andy Robert</p>
  </div>
  <div className="info-box">
    <p className="info-title">Category</p>
    <p className="info-text">Social Science</p>
  </div>
  <div className="info-box">
    <p className="info-title">Rating</p>
    <p className="info-text">⭐⭐⭐⭐☆ (4.5)</p>
  </div>
  <div className="info-box">
    <p className="info-title">Price</p>
    <p className="info-text">$29.00</p>
  </div>
</div>

      <img className="course-image" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/109/2024/09/CSE-Connect-Mentor-2048x1365.jpg" alt="Course" />
      
      <div className="main-content">
        <div className="left-section">
          <div className="nav-tabs">
            {['overview', 'curriculum', 'instructors', 'reviews'].map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === "overview" && (
              <div className="overview">
              <h2 className="tab-heading">Overview</h2>
            
              <h3 className="sub-heading">Why Learn React?</h3>
              <p>
                React is one of the most popular JavaScript libraries for building modern web applications. 
                It enables developers to create dynamic, fast, and responsive user interfaces with ease.
              </p>
            
              <h3 className="sub-heading">What You Will Learn</h3>
              <ul>
                <li>Introduction to React and its core concepts</li>
                <li>Working with components, props, and state</li>
                <li>Understanding React hooks like useState & useEffect</li>
                <li>State management using Redux & Context API</li>
                <li>Building real-world projects with APIs & authentication</li>
              </ul>
            
              <h3 className="sub-heading">Who Should Take This Course?</h3>
              <p>
                This course is designed for beginners who want to get started with React as well as 
                experienced developers looking to enhance their skills in modern web development.
              </p>
            
              <p>
                By the end of this course, you will have built multiple projects and gained 
                confidence to develop your own React applications from scratch.
              </p>
            </div>
            
            )}
            {activeTab === "curriculum" && (
              <div className="curriculum">
              <h2 className="tab-heading">Curriculum</h2>
            
              <h3 className="sub-heading" style={{ marginBottom: "15px" }}>Module 1: Introduction to React</h3>
              <table className="curriculum-table" style={{ marginBottom: "30px" }}>
                <tr>
                  <th>Lesson</th>
                  <th>Video Link</th>
                </tr>
                <tr>
                  <td>What is React?</td>
                  <td><a href="https://youtu.be/N3AkSS5hXMA" target="_blank">Watch Video</a></td>
                </tr>
                <tr>
                  <td>Setting Up React Environment</td>
                  <td><a href="https://youtu.be/sBws8MSXN7A" target="_blank">Watch Video</a></td>
                </tr>
              </table>
            
              <h3 className="sub-heading" style={{ marginBottom: "15px" }}>Module 2: State Management with Redux</h3>
              <table className="curriculum-table" style={{ marginBottom: "30px" }}>
                <tr>
                  <th>Lesson</th>
                  <th>Video Link</th>
                </tr>
                <tr>
                  <td>Understanding Redux Basics</td>
                  <td><a href="https://youtu.be/93p3LxR9xfM" target="_blank">Watch Video</a></td>
                </tr>
                <tr>
                  <td>Connecting Redux with React</td>
                  <td><a href="https://youtu.be/ZVQmnIB9KfM" target="_blank">Watch Video</a></td>
                </tr>
              </table>
            
              <h3 className="sub-heading" style={{ marginBottom: "15px" }}>Module 3: React Hooks & Context API</h3>
              <table className="curriculum-table hidden-border" style={{ marginBottom: "30px" }}>
                <tr>
                  <th>Lesson</th>
                  <th>Video Link</th>
                </tr>
                <tr>
                  <td>Using useState & useEffect</td>
                  <td><a href="https://youtu.be/dpw9EHDh2bM" target="_blank">Watch Video</a></td>
                </tr>
                <tr>
                  <td>Understanding Context API</td>
                  <td><a href="https://youtu.be/35lXWvCuM8o" target="_blank">Watch Video</a></td>
                </tr>
              </table>
            </div>
            
            
            )}
            {activeTab === "instructors" && (
              <div className="instructors">
                <h2 className="tab-heading">Instructors</h2>
                <div className="instructor-card">
                  <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/109/2024/09/CSE-Connect-Mentor-2048x1365.jpg" alt="Instructor" />
                  <div className="details">
                    <h3>Dr. John Smith</h3>
                    <p>PhD in Computer Science, 10+ years teaching experience.</p>
                  </div>
                </div>
                <div className="instructor-card">
                  <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/109/2024/09/CSE-Connect-Mentor-2048x1365.jpg" alt="Instructor" />
                  <div className="details">
                    <h3>Dr. John Smith</h3>
                    <p>PhD in Computer Science, 10+ years teaching experience.</p>
                  </div>
                </div>
                <div className="instructor-card">
                  <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/109/2024/09/CSE-Connect-Mentor-2048x1365.jpg" alt="Instructor" />
                  <div className="details">
                    <h3>Dr. John Smith</h3>
                    <p>PhD in Computer Science, 10+ years teaching experience.</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="reviews">
                <h2 className="tab-heading">Reviews</h2>
                {reviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <h4>{review.name}</h4>
                    <div className="rating">{Array(review.rating).fill(<FaStar color="#ff6600" />)}</div>
                    <p className="date">{review.date}</p>
                    <p>{review.comment}</p>
                  </div>
                ))}
                <div className="review-form">
                  <h3>Leave a Review</h3>
                  <input type="text" placeholder="Your Name" />
                  <textarea placeholder="Your Review"></textarea>
                  <button className="submit-button">Submit</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Course Sidebar Section */}
        <div className="course-sidebar">
          {/* Course Details Box */}
          <div className="course-details-box">
            <h3>Course Details</h3>
            <p><FaCalendarAlt /> Start Date: Aug 21, 2020</p>
            <p><FaClock /> Duration: 1 Year</p>
            <p><FaLanguage /> Language: English</p>
            <p><FaGraduationCap /> Skill Level: Beginner</p>
            <p><FaBook /> Subject: Web</p>
            <p><FaUsers /> Enrolled: 236</p>
            <p><FaCertificate /> Certification: Yes</p>
            <button className="enroll-btn">Enroll Course</button>
          </div>

          {/* Popular Courses Box */}
          {/* Popular Courses (Fixed Image Issue) */}
      <div className="popular-courses">
        <h3>Popular Courses</h3>
        <div className="popular-course-card">
          <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/109/2024/09/CSE-Connect-Mentor-2048x1365.jpg" alt="Course" />
          <p>Advanced JavaScript</p>
          <p>⭐⭐⭐⭐☆ (4.2)</p>
        </div>
        <div className="popular-course-card">
          <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/109/2024/09/CSE-Connect-Mentor-2048x1365.jpg" alt="Course" />
          <p>Mastering Python</p>
          <p>⭐⭐⭐⭐⭐ (4.8)</p>
        </div>
      </div>

          {/* Course Tags Box */}
          <div className="course-tag-box">
            <h3>Course Tags</h3>
            <p className="tag">Web Development</p>
            <p className="tag">JavaScript</p>
            <p className="tag">Beginner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
