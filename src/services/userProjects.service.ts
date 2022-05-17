import axios from "axios/instanceAxios";
import IUserProjects from "components/UserProjects/IUserProjects.interface";

import { getCurrentUserToken } from "./auth.service";

const token = getCurrentUserToken();

export const getUserProjects = async () => {
  return await axios(`/project/user-projects`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};

export const getUserTeamProjects = async () => {
  return await axios(`/team/user-team`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};

export const getOneProject = async (projectId: string) => {
  return await axios.get(`/project/${projectId}`, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const editUserProject = async (
  projectId: string,
  name: string,
  content: string,
  status: boolean,
  language: [string],
  description: string,
) => {
  return await axios.put(
    `/project/${projectId}`,
    { name, content, status, language, description },
    {
      headers: {
        "x-auth-token": token,
      },
    },
  );
};

// export const editUserProject = async (
//   _id: string,
//   name: string,
//   content: string,
//   status: boolean,
//   language: [string],
//   description: string,
// ) => {
//   return await axios
//     .put(
//       `/project/${_id}`,
//       { name, content, status, language, description },
//       {
//         headers: {
//           "x-auth-token": token,
//         },
//       },
//     )
//     .then((res) => {
//       return res.data;
//     });
// };
