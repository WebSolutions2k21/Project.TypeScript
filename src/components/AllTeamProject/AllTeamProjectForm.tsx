import { Modal } from "components/Modal";
import { paths } from "config/paths";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTeam, joinTeam } from "services/team.service";
import { getUser } from "services/user.service";
import { Button } from "styles";
import { ButtonModal, ModalButton, TeamForm, TeamName, View, Name } from "./AllTeamProjectTeam.style";
import ITeamProject from "./ITeamProject.interface";
import IUser from "./IUser.interface";

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

  // useEffect(() => {
  //   allTeamProject.map((items: ITeamProject) => {
  //     if (items.mentorId) {
  //       getUser(items.mentorId).then((res) => {
  //         console.log("res user", res.data);
  //       });
  //     }
  //   });
  // }, [allTeamProject]);

  // const getMentorName = (id: string) => {
  //   if (id) {
  //     getUser(id).then((res) => {
  //       console.log("res user", res);
  //       return res;
  //     });
  //   }
  // };

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

  const joinHandler = (id: string, userId: string) => {
    joinTeam(id, userId)
      .then(() => console.log("join in front"))
      .catch((e: Error) => {
        console.log("error w e", e);
      });
  };
  return (
    <>
      {/* <ul>        {group.map((item: Array<>) => {
          return <li>{item[0]}</li>;
        })}

      </ul> */}
      <Button onClick={() => navigate(paths.addTeam)}>Add Team</Button>
      <TeamForm>
        {allTeamProject &&
          allTeamProject.map((team, index) => (
            <View>
              <TeamName>
                <Name key={index}>{team.teamName}</Name>
                {/* {console.log("mentor",getUser(team.mentorId))} */}
                <ModalButton>
                  <Modal
                    children={
                      <>
                        {/* <p>Mentor: {getUser(team.mentorId)}</p> */}

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
                        <ButtonModal onClick={()=>joinHandler("626461515817540016b05701", "622b9441f2950d6fe0a2b40c")}>Join Team</ButtonModal>
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
