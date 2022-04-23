import axios from "axios/instanceAxios";
import IAddNewProject from "components/AddNewProject/AddNewProject.interface";

export const createProject = async (data: IAddNewProject) => {
  console.log("dane przychodzące", data)
  return await axios.post("/project/create", data)
};

