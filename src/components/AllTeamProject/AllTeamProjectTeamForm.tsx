import { Modal } from "components/Modal";
import { paths } from "config/paths";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTeam, joinTeam } from "services/team.service";
import { getUser } from "services/user.service";
import { Button } from "styles";
import { ButtonInModal, ModalButton, TeamForm, TeamName, View, Name } from "./AllTeamProjectTeam.style";
import ITeamProject from "./ITeamProject.interface";

export const AllTeamProjectTeamForm = () => {
  const [allTeamProject, setAllTeamProject] = useState<Array<ITeamProject>>([]);
  const [group, setGroup] = useState<Array<ITeamProject>>([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllTeam()
      .then((response: any) => {
        console.log("Res data", response.data);
        setAllTeamProject(response.data);
      })
      .catch((e: Error) => {
        console.log("error w e", e);
      });
  }, []);

  useEffect(() => {
    allTeamProject.map((items: ITeamProject) => {
      getUser(items.mentorId).then((res) => {
        console.log("res", res);
      });
    });
  }, [allTeamProject]);

  const groupBy = (arr: any[], key: string) => {
    const initialValue = {};
    return arr.reduce((acc, cval) => {
      const myAttribute = cval[key];
      acc[myAttribute] = [...(acc[myAttribute] || []), cval];
      return acc;
    }, initialValue);
  };

  useEffect(() => {
    const grouped = groupBy(allTeamProject, "mentorId");
    setGroup(grouped);
  }, [allTeamProject]);

  console.log("group", group);

  const joinToTeam = (id: string) => {
    console.log("dobry nr id teamu?", id);
    joinTeam(id)
      .then((res) => {
        console.log("ok", res);
      })
      .catch((e: Error) => {
        console.log("error w e", e);
      });
  };

  return (
    <>
      <TeamForm>
        {allTeamProject &&
          allTeamProject.map((team, index) => (
            <View>
              <TeamName  key={index}>
                <Name>{team.teamName}</Name>
                <ModalButton>
                  <Modal
                    children={
                      <>
                        <p key={index}>Status: {team.status ? "open" : "close"}</p>
                        <p>Places: {team.places}</p>
                        <p>Description: {team.description}</p>
                        <ul>
                          {" "}
                          {team.programmingLanguage &&
                            team.programmingLanguage.map((lang, index) => (
                              <>
                                <p key={index}> Programming language: {lang.nameLang} </p> <p>level: {lang.level} </p>
                              </>
                            ))}
                        </ul>
                        <ButtonInModal onClick={() => joinToTeam(team._id)}>Join Team</ButtonInModal>
                      </>
                    }
                    title={team.teamName}
                    buttonText={"View"}
                  ></Modal>
                </ModalButton>
              </TeamName>
            </View>
          ))}
      </TeamForm>
    </>
  );
};
