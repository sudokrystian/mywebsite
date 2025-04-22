import "./portfolio.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../project/ProjectData";

const Portfolio = () => {
  return (
    <div className="portfolio-div">
      <h3 className="portfolio-title">My projects</h3>
      <hr />
      <div className="portfolio-projects">
      {/* {projects.map((value, index) => {
          return <ProjectCard projectIndex={index} key={index}/>;
        })} */}
        <ProjectCard projectIndex={0} pathname="/snakegame" key={0}/>
        {/* <ProjectCard projectIndex={0} pathname="/tetrisgame" key={0}/>
        <ProjectCard projectIndex={0} pathname="/pacmangame" key={0}/> */}
        
      </div>
    </div>
  );
};
 
export default Portfolio;
