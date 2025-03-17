import AboutMeBox from "../../components/AboutMeBoxes/AboutMeBox";
import Banner from "../../components/Banner/Banner";
import SkillBox from "../../components/SkillBox/SkillBox";
import "./about.scss";
// Pictures
import via from "../../assets/experience/via.png";
import stibo from "../../assets/about/stibo_systems.png";
import cern from "../../assets/experience/cern.png";
import holme from "../../assets/experience/holmegroup.png";
import maskinmesterskole from "../../assets/about/maskinmesterskole.png";

const About = () => {
  const experienceSectionId = "experience-div";
  const skillsSectionId = "skills-div";
  const educationSectionId = "education-div";
  const hobbiesSectionId = "hobbies-div";

  const skills: string[] = [
    "Organizational skills",
    "MySQL",
    "Creativity",
    "Logical thinking",
    "Python",
    "Quick learner",
    "Power-BI",
    "Tech-savvy",
    "Timeliness",
    "Responsibility",
    "Scrum",
    "MS Project",
    "Microsoft Office",
    "MATLAB",
  ];

  return (
    <div className="about-div">
      <div id="introduction-div">
        <h3 className="about-title">About me</h3>
        <hr />
        <p className="about-introduction">
          Hello there! My name is Ula and I am a dedicated and results-driven Project 
          Coordinator with over two years of professional experience, primarily in civil 
          engineering. My passion lies in managing people and projects efficiently, 
          ensuring that every initiative I oversee meets its deadlines, stays within budget, 
          and surpasses quality expectations. I thrive on fostering collaboration, 
          driving team performance, and optimizing workflows to deliver successful outcomes. 
          In addition to my strong people management skills, I am adept at leveraging 
          technology to enhance productivity and streamline processes. From advanced 
          Excel functions to industry-standard tools like AutoCAD, MATLAB, and MS Project, 
          I ensure that projects run smoothly by integrating the right tools at the right time. 
          I also use AI-driven solutions to improve efficiency and data-driven decision-making 
          across tasks and teams. While my background is rooted in civil engineering, 
          my skills in project coordination, resource management, and process optimization 
          are highly transferable across industries. As I look to expand my career, 
          I am excited about opportunities in the tech sector, where I can apply 
          my experience in managing teams and delivering complex projects in a fast-paced, 
          innovative environment. Let’s connect if you’re seeking a proactive 
          project coordinator who excels at leading people and processes toward success.
        </p>
      </div>
      <Banner />
      <AboutMeBox
        experienceSectionId={experienceSectionId}
        skillsSectionId={skillsSectionId}
        educationSectionId={educationSectionId}
        hobbiesSectionId={hobbiesSectionId}
      />
      <br />
      <div id="experience-div">
        <h3>Experience</h3>
        <hr />
        <br />
        <div className="experience-jobs">
          <div className="experience-job">
            <img src={stibo} alt="Stibo Systems" className="company-img" />
            <br />
            <h5>Colliers Define 07/2022 - now</h5>
            <h6>Project Coordinator</h6>
            <ul>
              <li>Supervision, verification and coordination of the works carried out</li>
              <li>Defining project requirements based on customer input</li>
              <li>Overseeing and validating ongoing tasks and deliverables</li>
            </ul>
          </div>
          <div className="experience-job">
            <img src={cern} alt="CERN" className="company-img" />
            <h5>Twój developer 07/2020 - 08/2021</h5>
            <h6>Project Manager Assistant</h6>
            <ul>
              <li>Early planning and implementation of several investments</li>
              <li>Leadership and management of collaborative teams</li>
              <li>Coordination of project workflows</li>
            </ul>
          </div>
          <div className="experience-job">
            <img src={holme} alt="Holme Group" className="company-img" />
            <h5>Holme Gruppen ASP 04/2019 - 08/2020</h5>
            <h6>Full Stack web developer, System Design</h6>
            <ul>
              <li>
                Maintnance and further development of the old systems with PHP
                5.3 (f.e.
                <a
                  href="https://fashiongirl24.de/"
                  id="fashiongirl-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Fashion Girl,{" "}
                </a>
                <a
                  href="https://lookperfect.dk/"
                  id="lookperfect-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Look perfect
                </a>
                )
              </li>
              <li>
                Creating automated systems for providing loans and verifying
                status in RKI in cooperation with ExpressBank and Basisbank
                (f.e.
                <a
                  href="https://www.unolaan.dk"
                  id="unolaan-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Unolaan
                </a>
                ,
                <a
                  href="https://www.vialaan.dk"
                  id="vialaan-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Vialaan
                </a>
                )
              </li>
              <li>
                Writing custom plugins for WordPress and PrestaShop with PHP 7
              </li>
              <li>Designing and implementing websites</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="skills-div">
        <h3>Skills</h3>
        <hr />
        <br />
        <div className="skillboxes-div">
          {skills.map((skill) => (
            <SkillBox boxText={skill} key={skill} />
          ))}
        </div>
      </div>
      <br />
      <div id="education-div">
        <h3>Education</h3>
        <hr />
        <div className="education-containers">
          <div className="education-container">
            <img
              src={via}
              alt="VIA Univesity Collage"
              className="education-image"
            />
            <div className="education-header">
              <h6>2018 - 2023</h6>
              <p> 
                Engineering and Management of Construction Projects, 
                AGH University of Science and Technology
              </p>
            </div>
            <ul>
              <li>System architecture</li>
              <li>Agile driven development</li>
              <li>Full-stack Software Engineering</li>
            </ul>
          </div>
          <div className="education-container">
            <img
              src={maskinmesterskole}
              alt="Maskinmesterskole"
              className="education-image"
            />
            <div className="education-header">
              <h6>2015-2018</h6>
              <p>Mathematical, Physics and IT, 5th High School</p>
            </div>
            <ul>
              <li>Programming: C++, VBA</li>
              <li>Physics and Mathematics</li>
              <li>Management</li>
            </ul>
          </div>
          <div className="education-header"></div>
        </div>
      </div>
      <div id="hobbies-div">
        <h3>Hobbies</h3>
        <hr />
        <p>
          I am the kind of person who can't really sit still for a long time,
          therefore I have many hobbies that keep me going. Here is a list of
          some of my favorite ones.
        </p>
        <ul>
          <li>Learning new languages</li>
          <li>
            Powerlifting (the best way to grow is by overcoming your weaknesses 
            and embracing new opportunities)
          </li>
          <li>Psychology</li>
          <li>Fantasy books</li>
          <li>
            Travelling (the main aim for my travels are beautiful hikes in
            nature and good food)
          </li>
          <li>Board games</li>
          <li>
            Computer games (strategy and RPG are the best way to run away from
            brutal reality from time to time)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
