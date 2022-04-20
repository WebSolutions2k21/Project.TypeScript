
import React from "react";
import { paths } from "config/paths";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <h1>HomePage</h1>
     <Link to={paths.teamProjects}>AllTeamProjectTeam</Link>
     </>
  );
};

