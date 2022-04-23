import React, { useEffect, useState } from "react";
import { getUserProjects } from "services/user.service";
import { Button } from "styles";
import IUserProjects from "./IUserProjects.interface";
import { getCurrentUser } from "services/auth.service";
import { useNavigate } from "react-router-dom";
import { paths } from "config/paths";

export const UserProjectsForm = () => {
  const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUserProjects(getCurrentUser)
      .then((response: any) => {
        console.log("Res data", response.data);
        setUserAllProjects(response.data);
      })
      .catch((e: Error) => {
        console.log("error w e", e);
      });
  }, []);

  const handleClick = () => {
    navigate(paths.addProject);
  };

  return (
    <>
      {userAllProjects &&
        userAllProjects.map((user, index) => (
          <div key={index}>
            <div>{user.name}</div>
            <div>{user.content}</div>
          </div>
        ))}
      <Button type="submit" onClick={handleClick}>
        Add New Project
      </Button>
    </>
  );
};
