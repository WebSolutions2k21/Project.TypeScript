import { Modal } from "components/Modal";
import React, { useState } from "react";
import { getAllTeam } from "services/team.service";
import { UserAvatar } from "styles";
import { TitlePage, View } from "./AllTeamProjectTeam.style";

export const AllTeamProjectTeamForm = () => {
    const [allTeamProject, setAllTeamProject]= useState('');

  const retrieveTutorials = () => {
    getAllTeam()
      .then((response: any) => {
          
        console.log(response.data);
        setAllTeamProject(response.data)
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  retrieveTutorials()

  return (
    <>
      <TitlePage>
        <h1>All Team Projects</h1>
        <UserAvatar />
      </TitlePage>
      <View>
          {allTeamProject}
        <Modal children={"Zawartość"} title={"AAAA"}></Modal>
      </View>
    </>
  );
};
