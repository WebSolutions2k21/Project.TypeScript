import axios from "axios";

const URL = "http://localhost:5000/project/create"

export const createProject = async(
  name: string,
  mentorId: string,
  content: string,
  status: string
) => {
  return await axios
    .post(URL, {
      name,
      mentorId,
      content,
      status
    })
    .then((res) => {
      console.log(res)
      return res.data;
    });
}
