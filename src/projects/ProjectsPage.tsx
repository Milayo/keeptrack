import React, { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });

    setProjects(updatedProjects);
  };
  return (
    <>
      <ProjectList projects={projects} onSave={saveProject} />
    </>
  );
};

export default ProjectsPage;
