import axios from "../axios/instanceAxios";

const URL = "/project/create";

export const createProject = async (
  name: string,
  userId: string,
  mentorId: string,
  content: string,
  status: string,
) => {
  return await axios
    .post(URL, {
      name,
      userId,
      mentorId,
      content,
      status,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
};
