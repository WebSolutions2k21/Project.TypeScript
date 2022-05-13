import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { Modal } from "components/Modal";
import { paths } from "config/paths";
import { getAllTeam, joinTeam } from "services/team.service";
import { Toast } from "styles";
import { ButtonInModal, TeamForm, TeamName, View, Name } from "./AllTeamProjectTeam.style";
import ITeamProject from "../ITeamProject.interface";

export const AllTeamProjectTeamForm = () => {
  const [allTeamProject, setAllTeamProject] = useState<Array<ITeamProject>>([]);

  let navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    getAllTeam()
      .then((response: any) => {
        setAllTeamProject(response.data);
      })
      .catch((e: Error) => {
        toast.error(t`toast.team.error`);
      });
  }, [t]);

  const joinToTeam = (id: string) => {
    joinTeam(id)
      .then(() => {
        toast.success(t`toast.team.success`);
      })
      .catch((error) => {
        switch (error.response.status) {
          case 400:
            return toast.error(t`toast.team.notFound`);
          case 423:
            return toast.error(t`toast.team.locked`);
          default:
            return toast.error(t`toast.team.error`);
        }
      });
    setTimeout(() => {
      navigate(paths.myProjects);
    }, 1000);
  };

  return (
    <>
      <TeamForm>
        {allTeamProject &&
          allTeamProject.map((team, index) => (
            <View>
              <TeamName key={index}>
                <Name>{team.teamName}</Name>

                <Modal
                  children={
                    <>
                      <p key={index}>
                        {t`team.status`} {team.status ? "open" : "close"}
                      </p>
                      <p>
                        {t`team.places.name`} {team.places}
                      </p>
                      <p>
                        {t`team.description`} {team.description}
                      </p>
                      <ul>
                        {team.programmingLanguage &&
                          team.programmingLanguage.map(({ nameLang, level }, index) => (
                            <>
                              <li key={index}>
                                <p>
                                  {" "}
                                  {t`team.programmingLanguage`}: {nameLang}{" "}
                                </p>
                                <p>
                                  {t`team.level`} {level}{" "}
                                </p>
                              </li>
                            </>
                          ))}
                      </ul>
                      <ButtonInModal onClick={() => joinToTeam(team._id!)}>{t`team.button.joinTeam`} </ButtonInModal>
                    </>
                  }
                  title={team.teamName}
                  buttonText={t`team.button.view`}
                ></Modal>
              </TeamName>
            </View>
          ))}
      </TeamForm>
      <Toast />
    </>
  );
};
