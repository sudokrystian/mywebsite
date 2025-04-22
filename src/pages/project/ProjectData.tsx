import snake from "../../assets/my_projects/snake.jpg";
import movietoo from "../../assets/my_projects/movietoo-min.png";
import api from "../../assets/my_projects/api.jpg";
import this_website from "../../assets/my_projects/this_website.png";
import embedded from "../../assets/my_projects/embedded.jpg";



export interface ProjectData {
  projectTitle: string;
  projectImage: string;
  projectDescription: string;
  projectTechnologies: string[];
  projectUrl: string;
}
 
// Projects information  ===============================================================================

// Snake
const snakeProjectTitle = "Snake";

const snakeProjectTechnologies = ["SCSS", "React"];

const starWarsProjectDescription = `This online shooter was developed in Java 8. It 
was an experiment to check how efficient can be a game written in JavaFX (which is
not designed at all for such a dynamic graphic). Results were surprisingly good, 
customly written engine that uses sockets and RMI for multiplayer gameplay 
provided quite satisfying results. It is a simple 2D shooter with basic collision 
physics, but thanks to nice graphics it provides a fun nostalgic experience.`;



const starWarsProjectUrl =
  "https://github.com/sudokrystian/StarWars-game-client"; 

const snakeProject: ProjectData = {
  projectTitle: snakeProjectTitle,
  projectImage: snake,
  projectDescription: starWarsProjectDescription,
  projectTechnologies: snakeProjectTechnologies,
  projectUrl: starWarsProjectUrl,
};

// Tetris
const movietooProjectTitle = "MovieToo";

const movietooProjectTechnologies = [
  "Angular",
  "TypeScript",
  "JWT",
  "Azure Cloud",
];

const movietooProjectDescription = `Azure cloud project that served as both a school project 
and a great opportunity to once more brush off on the Angular framework. The website 
can be browsed as a guest, however creating an account enables users to rate and
comment on movies. It is connected to the biggest database of movies on the internet,
but all the private information is of course stored in a separate database. This project
uses some popular Angular libraries for a neat look and nice animations. You are able to 
view movies statistics like rating over time, or see the most popular movies and actors. 
The project was deployed to the cloud using and supports full CI/CD (including Angular tests).`;

const movietooProjectUrl = "https://github.com/sudokrystian/SEP6-frontend";

const movietooProject: ProjectData = {
  projectTitle: movietooProjectTitle,
  projectImage: movietoo,
  projectDescription: movietooProjectDescription,
  projectTechnologies: movietooProjectTechnologies,
  projectUrl: movietooProjectUrl,
};

// PacMan
const moviesAPIProjectTitle = "Movies API server and database";

const moviesAPITechnologies = ["Python", "Django", "JWT", "Azure Cloud"];

const moviesAPIProjectDescription = `Django python REST service and database responsible 
for getting information about movies from the external server and saving personal data 
like users, ratings, comments and more in the private database. This server supports both
authentication and authorization. Thanks to Django's simplicity it is very easy to add new 
endpoints and apply different types of permissions on them. Although no doubt it's slower than 
the Spring or .NET with Entity Framework that I am used to, it's fast enough for the users to 
not feel any discomfort. As an adventage it is much simpler to implement and is very maintnance 
friendly. This particular server is using JWT tokens for the authentication and authorization
process. The entire service was deployed to the Azure cloud and supports full CI/CD (including 
python tests).`;

const moviesAPIProjectUrl = "https://github.com/sudokrystian/SEP6-backend";

const moviesAPIProject: ProjectData = {
  projectTitle: moviesAPIProjectTitle,
  projectImage: api,
  projectDescription: moviesAPIProjectDescription,
  projectTechnologies: moviesAPITechnologies,
  projectUrl: moviesAPIProjectUrl,
};

// This website
const thisWebsiteProjectTitle = "This website";

const thisWebsiteProjectTechnologies = ["React", "TypeScript", "Google Cloud"];

const thisWebsiteProjectDescription = `If you are here you are already checking out one of my 
personal projects. It is a React typescript application currently deployed on Firebase with the use
of GitLab CI.CD. In the past it was deployed on Google Cloud, however fireabse is much more money efficient
for such small projects. Every cloud system has its tweaks and tricks, therefore I like to mix them up from 
time to time to stay up to date. Google Cloud requires a bit more work when it comes to setting up 
a proper CI/CD than AWS or Azure, therefore I encourage to checkout the old yaml files in the repository. 
The website is a classic example of React component based application, that makes use of the best 
functionalities like states. I hope you played with  the particles on the home page!`;

const thisWebsiteProjectUrl = "https://github.com/Ulszka/mywebsite";

const thisWebsiteProject: ProjectData = {
  projectTitle: thisWebsiteProjectTitle,
  projectImage: this_website,
  projectDescription: thisWebsiteProjectDescription,
  projectTechnologies: thisWebsiteProjectTechnologies,
  projectUrl: thisWebsiteProjectUrl,
};

// Embedded
const embeddedProjectTitle = "Embedded solution for sensors";

const embeddedProjectTechnologies = ["C", "FreeRTOS"];

const embeddedProjectDescription = `C software written with use of the FreeRTOS operating system 
kernel. By connecting the specified sensors to Arduino and using the provided codebase, one can 
measure temperature, CO2 and humidity levels in real time. All of the data will be send to the 
receiver through LoRa network, which can be read later on by external services (f.e. Spring).`;

const embeddedProjectUrl =
  "https://github.com/sudokrystian/Multi-threaded-embedded-sensors-and-transmitter";

const embeddedProject: ProjectData = {
  projectTitle: embeddedProjectTitle,
  projectImage: embedded,
  projectDescription: embeddedProjectDescription,
  projectTechnologies: embeddedProjectTechnologies,
  projectUrl: embeddedProjectUrl,
};




// =====================================================================================================

const projects = [
    snakeProject, 
    movietooProject, 
    moviesAPIProject,
    thisWebsiteProject,
    embeddedProject
    
];

export default projects;
