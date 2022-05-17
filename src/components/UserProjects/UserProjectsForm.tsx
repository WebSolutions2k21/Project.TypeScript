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
  ModalInput,
  Name,
  ProjectCard,
  ProjectForm,
  ProjectGroup,
} from "./UserProjects.style";
import { Modal } from "components";
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
              initialValues={{
                _id: project._id,
                name: project.name,
                content: project.content,
                status: project.status,
                language: project.language,
                description: project.description,
              }}
              onSubmit={({ _id, name, content, status, language, description }) => {
                editUserProject(_id, name, content, status, language, description);
                window.location.reload();
              }}
            >
              {({ handleSubmit, handleBlur, handleChange, values }) => {
                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <ProjectCard key={index}>
                      <Name>{project.name}</Name>
                      <Modal
                        title={project.name}
                        buttonText={t`project.button.edit`}
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
                        <ModalContent>
                          {t`project.name`}
                          <ModalInput
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.name}
                          />
                          {t`project.description`}
                          <ModalInput
                            type="text"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.description}
                          />
                          {t`project.content`}
                          <ModalInput
                            type="text"
                            name="content"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.content}
                          />
                          {t`project.language`}
                          <ModalInput
                            type="text"
                            name="language"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.language}
                          />
                          {t`project.status`}
                          <ModalInput
                            type="text"
                            name="status"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={project.status ? "open" : "close"}
                          />
                        </ModalContent>
                        <ButtonForm type="submit" />
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
