import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { editUserProject, getUserProjects, getUserTeam, deleteProject } from "services/userProjects.service";
import { IconText, TrashButton } from "styles";
import IUserProjects from "./IUserProjects.interface";
import ITeamProject from "components/Team/ITeamProject.interface";
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
  SubmitButton,
} from "./UserProjects.style";
import { Modal } from "components";

export const UserProjectsForm = () => {
  const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);
  const [userTeams, setUserTeams] = useState<Array<ITeamProject>>([]);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const isMentor = localStorage.getItem("mentor") === "true";

  useEffect(() => {
    getUserTeam()
      .then((response: any) => {
        setUserTeams(response.data);
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

  const navigateToMyTeamProjects = (project: any) => {
    navigate(paths.myTeamProjects);
    localStorage.setItem("teamProject", project);
  };

  const userIndividualProjects = userAllProjects.filter((project) => {
    return project.isIndividual === true;
  });

  return (
    <>
      <ProjectForm>
        <ProjectGroup>
          <IconText />
          <div>{t`project.individual`}</div>
        </ProjectGroup>
        {userIndividualProjects &&
          userIndividualProjects.map((project, index) => (
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
                        buttonText={!isMentor ? t`project.button.edit` : t`project.button.view`}
                        childrenButton={
                          !isMentor ? (
                            <ButtonInModal
                              onClick={() => {
                                deleteProject(project._id);
                                window.location.reload();
                              }}
                            >
                              <TrashButton />
                            </ButtonInModal>
                          ) : (
                            <ButtonInModal>{t`project.button.close`}</ButtonInModal>
                          )
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
                          <Field as="select" name="status" onChange={handleChange} onBlur={handleBlur}>
                            <option value="open">open</option>
                            <option value="closed">closed</option>
                          </Field>
                        </ModalContent>
                        {!isMentor ? <SubmitButton type="submit">{t`project.button.save`}</SubmitButton> : ""}
                      </Modal>
                    </ProjectCard>
                  </Form>
                );
              }}
            </Formik>
          ))}
        {!isMentor ? <ButtonForm onClick={navigateToAddProject}>{t`project.button.addNew`}</ButtonForm> : ""}
      </ProjectForm>
      {!isMentor ? (
        <ProjectForm>
          <ProjectGroup>
            <IconText />
            <div>{t`project.Teams`}</div>
          </ProjectGroup>
          {userTeams &&
            userTeams.map((team, index) => (
              <ProjectCard key={index}>
                <Name>{team.teamName}</Name>
                <Modal
                  title={team.teamName}
                  buttonText={t`project.button.view`}
                  childrenButton={
                    <ButtonInModal onClick={() => navigateToMyTeamProjects(team._id)}>
                      {" "}
                      {t`project.button.projects`}
                    </ButtonInModal>
                  }
                >
                  <ModalContent>
                    {t`project.description`}
                    {team.description}
                  </ModalContent>
                  <ModalContent>
                    {t`project.status`}
                    {team.status ? "open" : "close"}
                  </ModalContent>
                  <ModalContent>
                    {t`project.language`}
                    {team.programmingLanguage}
                  </ModalContent>
                </Modal>
              </ProjectCard>
            ))}
          <ButtonForm onClick={navigateToAllTeamProjects}>{t`project.button.viewTeam`}</ButtonForm>
        </ProjectForm>
      ) : (
        ""
      )}
    </>
  );
};
