import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
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
  MultiSelect,
  Name,
  ProjectCard,
  ProjectForm,
  ProjectGroup,
  SelectInput,
  SubmitButton,
} from "./UserProjects.style";
import { Modal } from "components";
import { options } from "config/languages";

export const UserProjectsForm = () => {
  const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);
  const [userTeams, setUserTeams] = useState<Array<ITeamProject>>([]);
  const [lngs, setLngs] = useState<Array<string>>([]);

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
                editUserProject(_id, name, content, status, (language = lngs), description);
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
                          <Name>
                            {project.language.map((project) => {
                              return <Name>{project}</Name>;
                            })}
                          </Name>
                          <MultiSelect
                            isMulti
                            name="language"
                            options={options}
                            classNamePrefix={"Select"}
                            id="language"
                            placeholder={`Select new Language`}
                            onChange={(value: any) => {
                              setLngs(value.map((e: any) => e.value));
                              return values.language;
                            }}
                          />

                          {t`project.status`}
                          <SelectInput
                            as="select"
                            name="status"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.status}
                          >
                            <option value="open">OPEN</option>
                            <option value="closed">CLOSED</option>
                          </SelectInput>
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
