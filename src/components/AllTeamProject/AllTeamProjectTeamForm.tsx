import { Modal } from "components/Modal";
import React, { useState, useEffect } from "react";
import { getAllTeam } from "services/team.service";
import { UserAvatar } from "styles";
import { TitlePage, View } from "./AllTeamProjectTeam.style";

export const AllTeamProjectTeamForm = () => {
  const [allTeamProject, setAllTeamProject] = useState([]);

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
  console.log("All team", allTeamProject);
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/type')
  //   .then(res => res.json())
  //   .then(setData)
  // },[])

  // return <div>
  //  <ul>
  //   {data.map((name) => <li key={name}>{name}</li>}
  //  </ul>
  // </div>

  return (
    <>
      <TitlePage>
        <h1>All Team Projects</h1>
        <UserAvatar />
      </TitlePage>
      {allTeamProject.map((teamName, _id) => (
        <div key={_id}>{teamName}</div>
      ))}
      <View>
    

        <Modal children={"Zawartość"} title={"AAAA"} buttonText={"View"}></Modal>
      </View>
    </>
  );
};
