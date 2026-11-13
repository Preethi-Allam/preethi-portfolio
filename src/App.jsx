import { useState } from "react";
import resumePDF from './assets/Preethi_Allam_Resume.pdf'
import { motion } from 'framer-motion'
import {
  Mail,
  Download,
  ArrowUpRight,
  Code2,
  Menu,
  X
} from 'lucide-react'

import profileImage from './assets/profile.jpg'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="portfolio">


      <nav className="navbar">
        <a href="#" className="logo">PA.</a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>


      <section className="hero-section">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="availability">
            <span className="status-dot"></span>
            OPEN TO JOB OPPORTUNITIES
          </span>

          <p className="intro-text">HELLO, I'M</p>

          <h1>
            Preethi
            <br />
            <span>Allam.</span>
          </h1>

          <h2>
            Aspiring Python Full Stack Developer
          </h2>

          <p className="hero-description">

            MCA graduate with a strong foundation in Python and Django. Currently undergoing Python Full Stack Development training, building my programming skills and exploring web application development.

          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Preethi-Allam"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/allam-preethi-divya-jyothi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:your-email@gmail.com">
              <Mail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-decoration"></div>

          <img
            src={profileImage}
            alt="Preethi Allam"
            className="profile-image"
          />

          <div className="floating-card">
            <Code2 size={20} />
            <div>
              <strong>Python Developer</strong>
              <span>Learning & Building</span>
            </div>
          </div>
        </motion.div>

      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm Preethi Allam, an MCA graduate with a strong interest in Python and Full Stack Development.

          I have studied Python, Django, HTML, CSS, JavaScript, React, and SQL through academic learning and professional training programs.

          I'm currently undergoing Python Full Stack Development training to strengthen my programming fundamentals and develop practical technical skills.

          I'm eager to learn, explore new technologies, and begin my career as a Python Developer.
        </p>
      </section>


      <section id="skills" className="skills-section">
        <p className="section-label">02 — TECHNICAL SKILLS</p>

        <h2>Technologies I'm Learning</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <span>01</span>
            <h3>Backend Development</h3>
            <p>Python · Django</p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>Frontend Development</h3>
            <p>HTML · CSS · JavaScript · React</p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>Database</h3>
            <p>MySQL</p>
          </div>
        </div>
      </section>



      <section id="projects" className="projects-section">
        <p className="section-label">03 — MY WORK</p>
        <h2>Projects I've Worked On</h2>
        <p className="projects-intro">
          A selection of projects completed during my academic and training journey.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <span className="project-number">01</span>
            <h3>Django CRUD Application</h3>
            <p>
              A web application demonstrating Create, Read, Update, and Delete
              operations using Django.
            </p>
            <div className="project-tags">
              <span>Python</span>
              <span>Django</span>
              <span>MySQL</span>
            </div>
            <span className="project-type">Academic / Training Project</span>
          </div>

          <div className="project-card">
            <span className="project-number">02</span>
            <h3>Blogger Application</h3>
            <p>
              A blog-based web application developed as part of my learning journey.
            </p>
            <div className="project-tags">
              <span>Python</span>
              <span>Django</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <span className="project-type">Academic / Training Project</span>
          </div>

          <div className="project-card">
            <span className="project-number">03</span>
            <h3>Car Website</h3>
            <p>
              A car-related website created to practise frontend web development.
            </p>
            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <span className="project-type">Academic / Training Project</span>
          </div>
        </div>
      </section>

      <section id="education" className="education-section">
        <p className="section-label">04 — MY JOURNEY</p>
        <h2>Education & Training</h2>
        <p className="education-intro">
          My academic background and ongoing technical learning journey.
        </p>

        <div className="education-list">
          <div className="education-card">
            <span>Currently</span>
            <h3>Python Full Stack Development</h3>
            <p>Professional Training</p>
            <small>Currently undergoing training</small>
          </div>

          <div className="education-card">
            <span>2023 – 2025</span>
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Andhra Loyola College</p>
            <small>CGPA: 8.32 / 10</small>
          </div>

          <div className="education-card">
            <span>2020 – 2023</span>
            <h3>Bachelor of Science (B.Sc.)</h3>
            <p>CH.S.D. St Theresa’s College for Women</p>
            <small>CGPA: 7.47 / 10</small>
          </div>
        </div>
      </section>



      <section id="contact" className="contact-section">
        <h2>Let's Connect</h2>

        <div className="contact-actions">
          <a href="mailto:preethi.allam4@gmail.com" className="email-button">
            Send me an email
          </a>

          <a
            href={resumePDF}
            download="Preethi_Allam_Resume.pdf"
            className="resume-button"
          >
            Download Resume
          </a>
        </div>
      </section>


      <div className="footer-links">
        <a
          href="https://github.com/Preethi-Allam"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/allam-preethi-divya-jyothi"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:preethi.allam4@gmail.com">
          Email
        </a>
      </div>



    </main>

  )
}

export default App
