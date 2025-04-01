import "./experience.scss";
// Workplace logos
import colliers from "../../assets/experience/colliers_logo_clean.png";
import twojDev from "../../assets/experience/twoj_developer.png";
import freelancing from "../../assets/experience/freelancing.png";
// Technologies images
import python from "../../assets/experience/technologies/python.png";
import react from "../../assets/experience/technologies/react.png";
import scss from "../../assets/experience/technologies/scss.png";
import html from "../../assets/experience/technologies/html.png";



const Experience = () => {
  return (
    <div className="experience-div">
      <h3 className="experience-title">My experience</h3>
      <hr />
      <img src={colliers} alt="Stibo Systems" className="company-img" />
      <br />
      <br />
      <h5>Project Coordinator in Colliers Define 07/2022 - now </h5>
      <p>
        As a Project Coordinator, I was responsible for overseeing and coordinating project
        teams to ensure smooth execution. My role involved tracking budgets, managing scope
        changes, and supervising ongoing tasks and deliverables. I also handled contract
        adherence, invoicing, and payment processes while maintaining comprehensive project
        documentation. Additionally, I worked closely with clients to define project
        requirements and actively participated in contract negotiations.
      </p>
      <div className="jobskills">
        <ul>
          <li>Organizational skills</li>
          <li>Creativity</li>
          <li>Logical thinking</li>
          <li>Power-BI</li>
          <li>Responsibility</li>
          <li>Timeliness</li>
          <li>Scrum</li>
          <li>MS Project</li>
        </ul>
        <div className="job-skills-images">
          <img src={react} alt="react" />
        </div>
      </div>

      <p>
        Colliers Define is an exciting place to work, offering a dynamic environment
        that blends strategic project management with real-world execution. Managing
        projects here requires adaptability, as each initiative comes with unique
        challenges in budgeting, scheduling, and workflow optimization. The role
        demands a deep understanding of risk management and contract administration
        to ensure smooth project delivery. With multiple teams and vendors involved,
        strong communication and problem-solving skills are essential to keep projects
        on track. The fast-paced nature of the work constantly pushes project coordinators
        to refine their skills and stay ahead in the field of project management.
      </p>
      <hr className="experience-spacer" />
      <br />
      <img src={twojDev} alt="CERN" className="company-img" />
      <h5>Project Manager Assistant in Twój developer 07/2020 - 08/2021</h5>
      <p>
        As a Project Manager Assistant at Twój Developer, I was responsible for early planning
        and implementation of several investments, ensuring smooth project execution from
        the initial stages. I played a key role in leading and managing collaborative teams,
        fostering effective communication, and ensuring alignment with project goals. Additionally,
        I coordinated project workflows, overseeing timelines, deliverables, and resource allocation
        to support successful project completion.
      </p>
      <br />
      <div className="jobskills">
        <ul>
          <li>Quick learner</li>
          <li>Timeliness</li>
          <li>Scrum</li>
          <li>MS Project</li>
          <li>Microsoft Office</li>
          <li>MATLAB</li>
        </ul>
        <div className="job-skills-images">
          
        </div>
      </div>

      <p>
        Twój Developer is a great place to start a career in project management, offering the
        opportunity to gain hands-on experience in various aspects of real estate development.
        Despite not being a large company, it provides a dynamic environment where you can learn
        a wide range of skills, from early project planning to execution and team coordination.
      </p>
      <br />
      <p>
        Working in this fast-paced setting pushed me to sharpen my time management and adaptability,
        enabling me to quickly master new tools and methodologies. I embraced agile techniques—especially
        Scrum—to boost team collaboration and enhance project outcomes. I relied on MS Project for precise
        scheduling and resource management, while using Microsoft Office for thorough documentation
        and reporting. Moreover, I expanded my analytical capabilities through MATLAB, which I used to
        refine processes and drive data-based decision-making.
      </p>
      <hr className="experience-spacer" />
      <br />
      <img src={freelancing} alt="Holme Group" className="company-img" />
      <h5>Project Manager Freelancing 04/2022 - now</h5>
      <p>
      As a Freelance IT Project Manager, I specialize in overseeing the early planning and execution of various
      technology projects, ensuring seamless progress from initiation to completion. I take an active role 
      in coordinating cross-functional teams, fostering effective collaboration, and maintaining clear communication
      to align with project objectives. Additionally, I manage project workflows, monitor timelines and deliverables,
      and optimize resource allocation to drive successful outcomes in dynamic IT environments.
      </p>
      <div className="jobskills">
        <ul>
          <li>HTML, SCSS, CSS</li>
          <li>Python</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="job-skills-images">
          <img src={html} alt="HTML" />
          <img src={scss} alt="scss" />
          <img src={react} alt="react" />
          <img src={python} alt="Python" />
        </div>
      </div>

      <p>
        
      </p>
    </div>
  );
};

export default Experience;
