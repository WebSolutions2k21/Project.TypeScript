import { Modal } from "components/Modal";
import { paths } from "config/paths";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTeam } from "services/team.service";
import { getUser } from "services/user.service";
import { Button } from "styles";
import { ButtonModal, ModalButton, TeamForm, TeamName, View, Name } from "./AllTeamProjectTeam.style";
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

  return (
    <>
      {/* <ul>        {group.map((item: Array<>) => {
          return <li>{item[0]}</li>;
        })}

      </ul> */}
<Button onClick={()=> navigate(paths.addTeam)}>Add Team</Button>
      <TeamForm>
        {allTeamProject &&
          allTeamProject.map((team, index) => (
            <View>
              <TeamName>
                <Name key={index}>{team.teamName}</Name>
                <ModalButton>
                  <Modal
                    children={
                      <>
                        {" "}
                        <p>Status: {team.status ? "open" : "close"}</p>
                        <ul>
                          {" "}
                          {team.programmingLanguage &&
                            team.programmingLanguage.map((lang, index) => (
                              <>
                                {" "}
                                <li key={index}>
                                  <p> Programming language: {lang.nameLang} </p>{" "}
                                </li>
                                <li>
                                  <p>level: {lang.level} </p>{" "}
                                </li>
                              </>
                            ))}
                        </ul>
                        <ButtonModal>Join Team</ButtonModal>
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
