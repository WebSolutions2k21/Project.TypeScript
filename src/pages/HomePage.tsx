
import React from "react";
import { paths } from "config/paths";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
    <>
     <h1>HomePage</h1>
     <Link to={paths.teamProjects}>AllTeamProjectTeam</Link>
     </>
    );
};