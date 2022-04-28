import React, { useEffect, useState } from "react";
// import { getUserProjects, getUserTeamProjects } from "services/userProjects.service";
import { IconText } from "styles";
import IUserProjects from "./IUserProjects.interface";
import ITeamProject from "../AllTeamProject/ITeamProject.interface";
import { useNavigate } from "react-router-dom";
import { paths } from "config/paths";
import { ButtonForm, ModalContent, Name, ProjectCard, ProjectForm, ProjectGroup } from "./UserProjects.style";
import { Modal } from "components/Modal";
import { useTranslation } from "react-i18next";

export const UserProjectsForm = () => {
  // const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);
  // const [userTeamProjects, setUserTeamProjects] = useState<Array<ITeamProject>>([]);

  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    // getUserTeamProjects()
    //   .then((response: any) => {
    //     setUserTeamProjects(response.data);
    //   })
    //   .catch((e: Error) => {
    //     console.log("error in getUserTeamProjects", e);
    //   });
  }, []);

  useEffect(() => {
    // getUserProjects()
    //   .then((response: any) => {
    //     setUserAllProjects(response.data);
    //   })
    //   .catch((e: Error) => {
    //     console.log("error in getUserProjects", e);
    //   });
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
          <div>{t`project.individual`}</div>
        </ProjectGroup>
        {/* {userAllProjects &&
          userAllProjects.map((project, index) => (
            <ProjectCard key={index}>
              <Name>{project.name}</Name>
              <Modal title={project.name} buttonText={t`project.button.view`}>
                <ModalContent>{project.content}</ModalContent>
                <ModalContent>{project.status ? "open" : "close"}</ModalContent>
              </Modal>
            </ProjectCard>
          ))} */}
        <ButtonForm type="submit" onClick={navigateToAddProject}>
          {t`project.button.addNew`}
        </ButtonForm>
      </ProjectForm>
      <ProjectForm>
        <ProjectGroup>
          <IconText />
          <div>{t`project.TeamProjects`}</div>
        </ProjectGroup>
        {/* {userTeamProjects &&
          userTeamProjects.map((project, index) => (
            <ProjectCard key={index}>
              <Name>{project.teamName}</Name>
              <Modal title={project.teamName} buttonText={t`project.button.view`}>
                <ModalContent>{project.description}</ModalContent>
                <ModalContent>{project.status ? "open" : "close"}</ModalContent>
              </Modal>
            </ProjectCard>
          ))} */}
        <ButtonForm type="submit" onClick={navigateToAllTeamProjects}>
          {t`project.button.viewTeam`}
        </ButtonForm>
      </ProjectForm>
    </>
  );
};
