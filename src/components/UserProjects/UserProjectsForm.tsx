import React, { useEffect, useState } from "react";
import { editUserProject, getOneProject, getUserProjects, getUserTeamProjects } from "services/userProjects.service";
import { Button, IconText } from "styles";
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
import { toast } from "react-toastify";

export const UserProjectsForm = () => {
  const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);
  const [userTeamProjects, setUserTeamProjects] = useState<Array<ITeamProject>>([]);
  // const [oneProject, setOneProject] = useState([]);

  // const oneProject = (id: string) => {
  //   getOneProject(id);
  // };

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
        console.log(response.data._id);
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

                editUserProject(
                  project._id,
                  project.name,
                  project.content,
                  project.status,
                  project.language,
                  project.description,
                );
                //   .then(() => {
                //     toast.success(t`toast.team.success`);
                //   })
                //   .catch((error) => {
                //     switch (error.response.status) {
                //       case 400:
                //         return toast.error(t`toast.team.notFound`);
                //       case 423:
                //         return toast.error(t`toast.team.locked`);
                //       default:
                //         return toast.error(t`toast.team.error`);
                //     }
                //   });
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
                              // editUserProject(project._id, {project.content} );
                              console.log(project.content);

                              // console.log(
                              //   editUserProject(
                              //     project.projectId,
                              //     project.name,
                              //     project.content,
                              //     project.status,
                              //     project.language,
                              //     project.description,
                              //   ),
                              // );
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
                            values={values.content}
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
