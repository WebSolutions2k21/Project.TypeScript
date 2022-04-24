import React, { useEffect, useState } from "react";
import { getUserProjects } from "services/userProjects.service";
import { Button } from "styles";
import IUserProjects from "./IUserProjects.interface";
import { useNavigate } from "react-router-dom";
import { paths } from "config/paths";
import { ProjectForm } from "./UserProjects.style";

export const UserProjectsForm = () => {
  const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUserProjects()
      .then((response: any) => {
        setUserAllProjects(response.data);
      })
      .catch((e: Error) => {
        console.log("error w UserProjects", e);
      });
  }, []);

  const handleClick = () => {
    navigate(paths.addProject);
  };

  return (
    <ProjectForm>
      {userAllProjects &&
        userAllProjects.map((project, index) => (
          <div key={index}>
            <div>{project.name}</div>
            <div>{project.content}</div>
          </div>
        ))}
      <Button type="submit" onClick={handleClick}>
        Add New Project
      </Button>
    </ProjectForm>
  );
};
