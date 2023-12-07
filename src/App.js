// App.js

import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    function checkInView() {
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.75 && top > -windowHeight * 0.25) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', checkInView);
    window.addEventListener('resize', checkInView);

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener('scroll', checkInView);
      window.removeEventListener('resize', checkInView);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="section">
        <h1>Bhavish Rohilla</h1>
        <p>Welcome to my portfolio! I'm a passionate developer.</p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I have expertise in web development and love creating innovative solutions.Detail-oriented recent graduate with Strong Foundation in web development. Skilled web developer proficient in leveraging the power of React, Python, and Django to craft dynamic and scalable web applications. With a strong foundation in front-end development using React, coupled with expertise in Python and Django for robust back-end solutions.</p>
      </section>

      <section id="projects" className="section">
        <h1>Projects</h1>
        <div className="project-list">
          <div className="project">
            <h2>Secure C# Login System with Advanced SQL</h2>
            <p>Engineered a C# project demonstrating a secure login system, efficient CRUD operations, and adept handling of authentication and data management. Implemented SQL for database functionality, establishing intricate relationships between lists and tasks, highlighting expertise in relational database design and comprehensive system development.</p>
          </div>
          <div className="project">
            <h2>C# SQL Project Management System Development</h2>
            <p>Designed and implemented a comprehensive C# project management system with SQL database integration. Enabled management of departments, employees, and projects while establishing effective relational structures between them for seamless data organization.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to get in touch with me:</p>
        <p>Email: bhavishrohilla59@gmail.com</p>
        <p>Phone: +17053136913</p>
      </section>
    </div>
  );
}

export default App;
