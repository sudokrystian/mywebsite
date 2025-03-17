import "./experience.scss";
// Workplace logos
import stibo from "../../assets/experience/stibo.png";
import via from "../../assets/experience/via.png";
import cern from "../../assets/experience/cern.png";
import holme from "../../assets/experience/holmegroup.png";
// Technologies images
import java from "../../assets/experience/technologies/java.png";
import swing from "../../assets/experience/technologies/swing.png";
import kotlin from "../../assets/experience/technologies/kotlin.png";
import groovy from "../../assets/experience/technologies/groovy.png";
import gradle from "../../assets/experience/technologies/gradle.png";
import jenkins from "../../assets/experience/technologies/jenkins.png";
import maven from "../../assets/experience/technologies/maven.png";
import spring from "../../assets/experience/technologies/spring.png";
import jpa from "../../assets/experience/technologies/jpa.png";
import jwt from "../../assets/experience/technologies/jwt.png";
import net from "../../assets/experience/technologies/.NET.png";
import python from "../../assets/experience/technologies/python.png";
import react from "../../assets/experience/technologies/react.png";
import angular from "../../assets/experience/technologies/angular.png";
import scss from "../../assets/experience/technologies/scss.png";
import html from "../../assets/experience/technologies/html.png";
import jquery from "../../assets/experience/technologies/jquery.png";
import typescript from "../../assets/experience/technologies/typescript.png";
import js from "../../assets/experience/technologies/js.png";
import php from "../../assets/experience/technologies/php.png";
import gwt from "../../assets/experience/technologies/gwt.png";
import osgi from "../../assets/experience/technologies/osgi.png";
import svn from "../../assets/experience/technologies/svn.png";


const Experience = () => {
  return (
    <div className="experience-div">
      <h3 className="experience-title">My experience</h3>
      <hr />
      <img src={stibo} alt="Stibo Systems" className="company-img" />
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
          <img src={java} alt="Java" />
          <img src={gwt} alt="GWT" />
          <img src={swing} alt="Java Swing" />
          <img src={jenkins} alt="Jenkins" />
          <img src={gradle} alt="Gradle" />
          <img src={osgi} alt="OSGI" />
          <img src={react} alt="react" />
          <img src={typescript} alt="Typescript" />
          <img src={svn} alt="SVN" />
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
      <img src={cern} alt="CERN" className="company-img" />
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
          <img src={java} alt="Java" />
          <img src={kotlin} alt="Kotlin" />
          <img src={groovy} alt="Groovy" />
          <img src={gradle} alt="Gradle" />
          <img src={jenkins} alt="Jenkins" />
          <img src={maven} alt="Maven" />
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
      <img src={holme} alt="Holme Group" className="company-img" />
      <h5>Web developer Holme Gruppen ASP 04/2019 - 08/2020</h5>
      <p>
        As most of the developers I have kicked-off my career with web
        development. I worked with quite a variety of systems and CMSs. This was
        definietely the job where I had to be the most versatile.
      </p>
      <div className="jobskills">
        <ul>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>HTML, SCSS, CSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>.NET</li>
          <li>Writing WordPress plugins</li>
          <li>Writing OpenCart plugins</li>
          <li>Writing Prestashop plugins</li>
        </ul>
        <div className="job-skills-images">
          <img src={php} alt="PHP" />
          <img src={js} alt="JavaScript" />
          <img src={typescript} alt="TypeScript" />
          <img src={jquery} alt="jQuery" />
          <img src={html} alt="HTML" />
          <img src={scss} alt="scss" />
          <img src={react} alt="react" />
          <img src={angular} alt="Angular" />
          <img src={python} alt="Python" />
          <img src={java} alt="Java" />
          <img src={net} alt=".NET" />
        </div>
      </div>

      <p>
        HolmeGruppen has a huge variety of services. They have many e-commerce
        shops, websites that act as brokers for bank loans and even websites
        with rankings and comaprisons of products. Therefore, high level of
        adapdability was required. Sometimes I had to learn a compeltely new
        framework or language in a matter of hours in order to handle the issue.
        On top of that, all the websites were making money live, so any downtime
        resulted in loss of profit. This resulted in a very high-pressure
        environement. Thanks to this job I learned to keep my head cool and
        handle the problems in an organized way.
      </p>
    </div>
  );
};

export default Experience;
