import './App.css';
import profile from './assets/data';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
      <ThemeToggle />
      <div className="main-wrapper">
      <div className="left-column">
        <div className="profile-card">
          <img src={profile.profilePhoto} alt="Profile" className="profile-img" />
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="location">{profile.location}</p>
          <p className="email">{profile.email}</p>
          <div className="social-icons">
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg width="24" height="24" fill="currentColor"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.373-12-12-12z"/></svg></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><svg width="24" height="24" fill="currentColor"><path d="M12 13.065l-11.99-7.065v14h24v-14l-12.01 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z"/></svg></a>
          </div>
          <a className="resume-btn wide" href={profile.resume} download>Download Resume (PDF)</a>
        </div>
        <div className="about-card">
          <h3>About Me</h3>
          <p>{profile.about}</p>
        </div>
        <div className="skills-card">
          <h3>Skills</h3>
          <div className="stack-tags">
            {profile.skills.map((skill, idx) => <span key={idx}>{skill}</span>)}
          </div>
        </div>
      </div>
      <div className="right-column">
        <section id="experience" className="section">
          <h2>Experience</h2>
          {profile.experience.map((exp, idx) => (
            <div className="experience-card" key={idx}>
              <div className="exp-header">
                <div className="exp-title">
                  <img src={exp.logo} alt="Company Logo" className="company-logo" />
                  <div>
                    <h3>{exp.title}</h3>
                    <span className="company">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              <ul>
                {exp.description.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="stack-tags">
                {exp.stack.map((tag, i) => <span key={i}>{tag}</span>)}
              </div>
            </div>
          ))}
        </section>
        <section id="education" className="section">
          <h2>Education</h2>
          {profile.education.map((edu, idx) => (
            <div className="experience-card" key={idx}>
              <div className="exp-header">
                <div className="exp-title">
                  <img src={edu.logo} alt="Company Logo" className="company-logo" />
                  <div>
                    <h3>{edu.school}</h3>
                    <span className="company">{edu.degree}</span>
                    <span className="location">{edu.location}</span>
                  </div>
                </div>
                <span className="exp-date">{edu.date}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
    </>
  );
}

export default App; 