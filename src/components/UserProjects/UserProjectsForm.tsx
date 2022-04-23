import React, { useEffect, useState } from "react";
import { getUserProjects } from "services/user.service";
import { Button } from "styles";
import IUserProjects from "./IUserProjects.interface";

export const UserProjectsForm = () => {
  const [userAllProjects, setUserAllProjects] = useState<Array<IUserProjects>>([]);

  useEffect(() => {
    getUserProjects()
      .then((response: any) => {
        console.log("Res data", response.data);
        setUserAllProjects(response.data);
      })
      .catch((e: Error) => {
        console.log("error w e", e);
      });
  }, []);

  return (
    <>
      {userAllProjects &&
        userAllProjects.map((user, index) => (
          <div key={index}>
            <div>{user.name}</div>
            <div>{user.content}</div>
          </div>
        ))}
      <Button>Add New Project</Button>
    </>
  );
};
