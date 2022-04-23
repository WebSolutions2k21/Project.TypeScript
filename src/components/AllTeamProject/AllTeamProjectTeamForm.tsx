import { Modal } from "components/Modal";
import Navbar from "components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { getAllTeam } from "services/team.service";
import { ButtonModal, ModalButton, TeamForm, TeamName, View, Name } from "./AllTeamProjectTeam.style";
import ITeamProject from "./ITeamProject.interface";

export const AllTeamProjectTeamForm = () => {
  const [allTeamProject, setAllTeamProject] = useState<Array<ITeamProject>>([]);

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

  // const grouped = groupBy(allTeamProject, team => team.mentorId);

  // console.log("group", grouped)

  return (
    <>
    <TeamForm>

      {allTeamProject &&
        allTeamProject.map((team, index) => (
          <View>
            <TeamName>
              <Name key={index} >{team.teamName}</Name>
           <ModalButton>  
             <Modal children={<> <p>Status: {(team.status)? "open" : "close" }</p><ul> {team.programmingLanguage && team.programmingLanguage.map((lang, index) => (
               <> <li key={index}><p> Programming language: {lang.nameLang} </p> </li>
                <li><p>level: {lang.level} </p>  </li></>
            ))}</ul><ButtonModal>Join Team</ButtonModal></>
          } title={team.teamName} buttonText={"View"} ></Modal></ModalButton></TeamName>
          </View>
        ))}
        </TeamForm>
    </>
  );
};

