import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ButtonForm, ButtonInModal, ButtonTable, Name, TeamForm, TeamName, View } from "./MyTeam.style";

import { paths } from "config/paths";
import ITeamProject from "../ITeamProject.interface";
import { toast } from "react-toastify";
import { deleteTeam, getMyTeam } from "services/team.service";
import { Modal } from "components/Modal";
import { Toast } from "styles";

export const MyTeam = () => {
  const [myTeam, setMyTeam] = useState<Array<ITeamProject>>([]);
  let navigate = useNavigate();

  const { t } = useTranslation();

  const navigateToAddTeam = () => {
    navigate(paths.addTeam);
  };

  useEffect(() => {
    getMyTeam()
      .then((response: any) => {
        setMyTeam(response.data);
      })
      .catch((e: Error) => {
        console.log("error in getUserProjects", e);
      });
  }, [myTeam]);

  const deleteMentorTeam = (id: string) => {
    deleteTeam(id)
      .then((response: any) => {
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        toast.success(t`toast.team.successDelete`);
      })
      .catch((e: Error) => {
        toast.error(t`toast.team.error`);
      });
  };

  const navigateToMyTeamProjects = (project: any) => {
    navigate(paths.myTeamProjects);
    localStorage.setItem("teamProject", project);
  };

  return (
    <>
      <TeamForm>
        <ButtonForm type="submit" onClick={navigateToAddTeam}>
          {t`team.button.addTeam`}
        </ButtonForm>
        <ul>
          {myTeam &&
            myTeam.map(({ _id, teamName }, index) => (
              <View key={index}>
                <TeamName>
                  <Name>{teamName}</Name>
                  <ButtonTable onClick={() => navigateToMyTeamProjects(_id)}> {t`team.button.projects`}</ButtonTable>
                  <Modal
                    children={
                      <>
                        <p> {t`team.modalText`}</p>
                      </>
                    }
                    childrenButton={
                      <ButtonInModal onClick={() => deleteMentorTeam(_id!)}>{t`team.button.delete`}</ButtonInModal>
                    }
                    title={teamName}
                    buttonText={t`team.button.delete`}
                  ></Modal>
                </TeamName>
              </View>
            ))}
        </ul>
      </TeamForm>
      <Toast />
    </>
  );
};
