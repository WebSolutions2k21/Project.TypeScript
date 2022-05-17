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
import { Modal } from "components";
import { useTranslation } from "react-i18next";
import { InputDoubleClick } from "components/InputDoubleClick";
import { Form, Formik } from "formik";

export const UserProjectsForm = () => {
  const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);
  const [userTeamProjects, setUserTeamProjects] = useState<Array<ITeamProject>>([]);
  const [editProject, setEditProject] = useState<Array<IUserProjects>>([]);

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

  // useEffect(() => {
  //   const id = userAllProjects;
  //   editProject(id);
  // });

  const navigateToAddProject = () => {
    navigate(paths.addProject);
  };

  const navigateToAllTeamProjects = () => {
    navigate(paths.teamProjects);
  };

  const initialValues: IUserProjects = {
    _id: "",
    name: "",
    content: "",
    status: true,
    language: [""],
    description: "",
  };

  return (
    <>
      <ProjectForm>
        <ProjectGroup>
          <IconText />
          <div>{t`project.individual`}</div>
        </ProjectGroup>
        {userAllProjects &&
          userAllProjects.map((project, index) => (
            <Formik
              key={index}
              initialValues={initialValues}
              onSubmit={() => {
                console.log(project._id);
                console.log(project.content);
                console.log("0");
                editUserProject(
                  project._id,
                  project.name,
                  project.content,
                  project.status,
                  project.language,
                  project.description,
                ).then((response: any) => {
                  setEditProject(response.data);
                  console.log("before", response.data);
                  console.log("1");
                  console.log(editProject);
                });
              }}
            >
              {({ handleSubmit, handleBlur, handleChange, values }) => {
                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <ProjectCard key={index}>
                      <Name>{project.name}</Name>
                      <Modal
                        title={project.name}
                        buttonText={t`project.button.view`}
                        childrenButton={
                          <ButtonInModal
                            type="submit"
                            onClick={() => {
                              console.log(project.content);
                            }}
                          >
                            {t`project.button.save`}
                          </ButtonInModal>
                        }
                      >
                        <ButtonForm type="submit" />
                        <ModalContent>
                          {t`project.content`}
                          <InputDoubleClick
                            name="content"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            textInput={project.content}
                            values={project.content}
                          />
                        </ModalContent>
                        <ModalContent>
                          {t`project.status`}
                          {project.status ? "open" : "close"}
                        </ModalContent>
                      </Modal>
                    </ProjectCard>
                  </Form>
                );
              }}
            </Formik>
          ))}
        <ButtonForm onClick={navigateToAddProject}>{t`project.button.addNew`}</ButtonForm>
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
        <ButtonForm onClick={navigateToAllTeamProjects}>{t`project.button.viewTeam`}</ButtonForm>
      </ProjectForm>
    </>
  );
};
