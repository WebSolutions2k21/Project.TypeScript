import React, { useEffect, useState } from "react";
import { getUserProjects, getUserTeamProjects } from "services/userProjects.service";
import { Button, IconText } from "styles";
import IUserProjects from "./IUserProjects.interface";
import ITeamProject from "../AllTeamProject/ITeamProject.interface";
import { useNavigate } from "react-router-dom";
import { paths } from "config/paths";
import { Name, ProjectCard, ProjectForm, ProjectGroup } from "./UserProjects.style";
import { Modal } from "components/Modal";

export const UserProjectsForm = () => {
  const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);
  const [userTeamProjects, setUserTeamProjects] = useState<Array<ITeamProject>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUserTeamProjects()
      .then((response: any) => {
        setUserTeamProjects(response.data);
      })
      .catch((e: Error) => {
        console.log("error in getUserTeamProjects", e);
      });
  }, []);

  useEffect(() => {
    getUserProjects()
      .then((response: any) => {
        setUserAllProjects(response.data);
      })
      .catch((e: Error) => {
        console.log("error in getUserProjects", e);
      });
  }, []);

  const navigateToAddProject = () => {
    navigate(paths.addProject);
  };

  const navigateToAllTeamProjects = () => {
    navigate(paths.teamProjects);
  };

  return (
    <>
      <ProjectForm>
        <ProjectGroup>
          <IconText />
          <div>Individual Projects</div>
        </ProjectGroup>
        {userAllProjects &&
          userAllProjects.map((project, index) => (
            <ProjectCard key={index}>
              <Name>{project.name}</Name>
              <Modal title={project.name} buttonText={"VIEW"}>
                <div>{project.content}</div>
              </Modal>
            </ProjectCard>
          ))}
        <Button type="submit" onClick={navigateToAddProject}>
          Add New Project
        </Button>
      </ProjectForm>
      <ProjectForm>
        <ProjectGroup>
          <IconText />
          <div>Team Projects</div>
        </ProjectGroup>
        {userTeamProjects &&
          userTeamProjects.map((project, index) => (
            <ProjectCard key={index}>
              <Name>{project.teamName}</Name>
              <Modal title={project.teamName} buttonText={"VIEW"}>
                <div>{project.mentorId}</div>
                <div>{project.status}</div>
              </Modal>
            </ProjectCard>
          ))}
        <Button type="submit" onClick={navigateToAllTeamProjects}>
          View Team Projects
        </Button>
      </ProjectForm>
    </>
  );
};
