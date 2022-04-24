import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { Modal } from "components/Modal";
import { paths } from "config/paths";
import { getAllTeam, joinTeam } from "services/team.service";
import { getUser } from "services/user.service";
import { Toast } from "styles";
import { ButtonInModal, TeamForm, TeamName, View, Name } from "./AllTeamProjectTeam.style";
import ITeamProject from "./ITeamProject.interface";

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

  useEffect(() => {
    allTeamProject.map((items: ITeamProject) => {
      getUser(items.mentorId).then((res) => {
        console.log("res", res);
      });
    });
  }, [allTeamProject]);


  const joinToTeam = (id: string) => {
    joinTeam(id)
      .then(() => {
        setTimeout(() => {
          navigate(paths.myProjects);
        }, 1000);
        toast.success(t`toast.team.success`);
      })
      .catch((e: Error) => {
        toast.error(t`toast.team.error`);
      });
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
                      <p>{t`team.places`} {team.places}</p>
                      <p>{t`team.description`}  {team.description}</p>
                      <ul>
                        {" "}
                        {team.programmingLanguage &&
                          team.programmingLanguage.map((lang, index) => (
                            <>
                              <p key={index}> {t`team.programmingLanguage`}: {lang.nameLang} </p> 
                              <p>{t`team.level`} {lang.level} </p>
                            </>
                          ))}
                      </ul>
                      <ButtonInModal onClick={() => joinToTeam(team._id)}>{t`team.button.joinTeam`} </ButtonInModal>
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
