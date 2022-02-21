import React, {} from "react";
import ProjectsCard from "../ProjectsCard";
import projects from "../pages/data/projects.json";


function Projects() {
  return (
    <div>



      <div className="container portfolio-container">
        <h1 className="title">Projects</h1>
        <div className="row">
          <ProjectsCard
            name={projects[0].name}
            image={projects[0].images}
            project={projects[0].project}
            location={projects[0].location}
            github={projects[0].github}
          />
          <ProjectsCard
            name={projects[1].name}
            image={projects[1].images}
            project={projects[1].project}
            location={projects[1].location}
            github={projects[0].github}
          />
        </div>
        <div className="row">
          <ProjectsCard
            name={projects[2].name}
            image={projects[2].images}
            project={projects[2].project}
            location={projects[2].location}
            github={projects[0].github}
          />

          <ProjectsCard
            name={projects[3].name}
            images={projects[3].images}
            project={projects[3].project}
            location={projects[3].location}
            github={projects[0].github}
          />
        </div>

        <div className="row">

          <ProjectsCard
            name={projects[4].name}
            image={projects[4].images}
            project={projects[4].project}
            location={projects[4].location}
            github={projects[0].github}
          />

          <ProjectsCard
            name={projects[5].name}
            image={projects[5].images}
            project={projects[5].project}
            location={projects[5].location}
            github={projects[0].github}
          />

        </div>
      </div>



    </div >
  );
}

export default Projects;