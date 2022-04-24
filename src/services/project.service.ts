import axios from "../axios/instanceAxios";
import jwt_decode from "jwt-decode";


const URL = "/project/create";
const URLMentors = "/users/mentors";

interface IAddNewProject {
  name?: string;
  userId?: string;
  mentorId?: string;
  content?: string;
  status?: string;
}

export const createProject = (
  name: string,
  userId: string,
  mentorId: string,
  content: string,
  status: string,
) => {
  
  // TODO => This section will be developed over the next month. These are just the first attempts.
  const data: IAddNewProject = {}
  if (name.length > 0) data.name = name
  if (userId.length > 0) {
    const uID:{_id: string} = jwt_decode(userId)
    data.userId = uID._id
  }
  if (mentorId.length > 0) data.mentorId = jwt_decode(mentorId)
  if (content.length > 0) data.content = content
  if (status.length > 0) data.status = status
  
  return axios
    .post(URL, data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch(e => {
      console.log(e)
    });
  };


  export const getMentors = () => {
    return axios.get(URLMentors)
      .then((res) => {
        return res;
      })
  };
