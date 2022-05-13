import React, { useEffect, useState } from "react";
import { editUserProject, getUserProjects, getUserTeamProjects } from "services/userProjects.service";
import { IconText } from "styles";
import IUserProjects from "./IUserProjects.interface";
import ITeamProject from "components/Team/ITeamProject.interface";
import { useNavigate } from "react-router-dom";
import { paths } from "config/paths";

import {
  ButtonForm,
  ButtonInModal,
  ModalContent,
  Name,
  ProjectCard,
  ProjectForm,
  ProjectGroup,
} from "./UserProjects.style";
import { Modal, InputDoubleClick } from "components";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";

export const UserProjectsForm = () => {
  const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);
  const [userTeamProjects, setUserTeamProjects] = useState<Array<ITeamProject>>([]);

  const navigate = useNavigate();
  const { t } = useTranslation();

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

  const initialValues: IUserProjects = {
    projectId: "",
    name: "",
    content: "",
    status: true,
    language: [""],
    description: "",
  };

  return (
    <>
      <ProjectForm>
        {/* <Formik initialValues={initialValues} onSubmit={(projectId) => editUserProject(projectId)}>
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}> */}
        <ProjectGroup>
          <IconText />
          <div>{t`project.individual`}</div>
        </ProjectGroup>
        {userAllProjects &&
          userAllProjects.map((project, index) => (
            <ProjectCard key={index}>
              <Name>{project.name}</Name>
              <Modal
                title={project.name}
                buttonText={t`project.button.view`}
                childrenButton={<ButtonInModal> {t`project.button.save`}</ButtonInModal>}
              >
                <ModalContent>
                  {t`project.content`}
                  {/* <InputDoubleClick children={project.content} /> */}
                </ModalContent>
                <ModalContent>
                  {t`project.status`}
                  {project.status ? "open" : "close"}
                </ModalContent>
              </Modal>
            </ProjectCard>
          ))}
        <ButtonForm type="submit" onClick={navigateToAddProject}>
          {t`project.button.addNew`}
        </ButtonForm>
        {/* </Form>
            );
          }}
        </Formik> */}
      </ProjectForm>
      <ProjectForm>
        <ProjectGroup>
          <IconText />
          <div>{t`project.TeamProjects`}</div>
        </ProjectGroup>
        {userTeamProjects &&
          userTeamProjects.map((project, index) => (
            <ProjectCard key={index}>
              <Name>{project.teamName}</Name>
              <Modal
                title={project.teamName}
                buttonText={t`project.button.view`}
                childrenButton={<ButtonInModal> {t`project.button.save`}</ButtonInModal>}
              >
                <ModalContent>
                  {t`project.description`}
                  {project.description}
                </ModalContent>
                <ModalContent>
                  {t`project.status`}
                  {project.status ? "open" : "close"}
                </ModalContent>
              </Modal>
            </ProjectCard>
          ))}
        <ButtonForm type="submit" onClick={navigateToAllTeamProjects}>
          {t`project.button.viewTeam`}
        </ButtonForm>

        {/* <InputDoubleClick /> */}
      </ProjectForm>
    </>
  );
};
