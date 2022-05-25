import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { editUserProject, deleteProject } from "services/userProjects.service";
import { IconText, TrashButton } from "styles";
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
} from "./MyTeamProjects.style";
import { Modal } from "components";
import { getAllProjects } from "services/project.service";
import IMyTeamProjects from "./IMyTeamProjects.interface";
import { options } from "config/languages";

export const MyTeamProjects = () => {
  const [allProjects, setAllProjects] = useState<Array<IMyTeamProjects>>([]);
  const [lngs, setLngs] = useState<Array<string>>([]);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const isMentor = localStorage.getItem("mentor") === "true";

  useEffect(() => {
    getAllProjects()
      .then((response: any) => {
        setAllProjects(response.data);
      })
      .catch((e: Error) => {
        console.log("error in getUserProjects", e);
      });
  }, []);

  const navigateToAddTeamProject = () => {
    navigate(paths.addTeamProject);
  };

  const allTeamProjects = allProjects.filter((project) => {
    return project.isIndividual === false && project.teamId === localStorage.getItem("teamProject");
  });

  return (
    <>
      <ProjectForm>
        <ProjectGroup>
          <IconText />
          <div>{t`project.individual`}</div>
        </ProjectGroup>
        {allTeamProjects &&
          allTeamProjects.map((project, index) => (
            <Formik
              key={index}
              initialValues={{
                _id: project._id,
                name: project.name,
                status: project.status,
                language: project.language,
                description: project.description,
                content: project.content,
                teamId: project.teamId,
              }}
              onSubmit={({ _id, name, content, status, language, description }) => {
                editUserProject(_id, name, content, status, (language = lngs), description);
                window.location.reload();
              }}
            >
              {({ handleSubmit, handleBlur, handleChange, values }) => {
                return (
                  <>
                    {isMentor ? (
                      <Form noValidate onSubmit={handleSubmit}>
                        <ProjectCard key={index}>
                          <Name>{project.name}</Name>
                          <Modal
                            title={project.name}
                            buttonText={isMentor ? t`project.button.edit` : t`project.button.view`}
                            childrenButton={
                              isMentor ? (
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
                            {isMentor ? <SubmitButton type="submit">{t`project.button.save`}</SubmitButton> : ""}
                          </Modal>
                        </ProjectCard>
                      </Form>
                    ) : (
                      <ProjectCard key={index}>
                        <Name>{project.name}</Name>
                        <Modal
                          title={project.name}
                          buttonText={t`project.button.view`}
                          childrenButton={<ButtonInModal>{t`project.button.close`}</ButtonInModal>}
                        >
                          <ModalContent>
                            {t`project.name`}
                            <Name>{project.name}</Name>
                            {t`project.description`}
                            <Name>{project.description}</Name>
                            {t`project.content`}
                            <Name>{project.content}</Name>
                            {t`project.language`}
                            {project.language.map((project) => {
                              return <Name>{project}</Name>;
                            })}
                            {t`project.status`}
                            <Name>{project.status}</Name>
                          </ModalContent>
                        </Modal>
                      </ProjectCard>
                    )}
                  </>
                );
              }}
            </Formik>
          ))}
        <ButtonForm onClick={navigateToAddTeamProject}>{t`project.button.addNewTeamProject`}</ButtonForm>
      </ProjectForm>
    </>
  );
};
