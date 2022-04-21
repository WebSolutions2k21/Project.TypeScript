import * as React from "react";
import ITeamProject from "../ITeamProject.interface";

export default class TeamProject extends React.Component<ITeamProject, {}> {
constructor (props: ITeamProject){
  super(props);
}
render() {
  return (  
    <div>
      <h1>Team Project</h1>
        Mentor Id, <b>{this.props.mentorId}</b>
        <br/>
        Team Name <b>{this.props.teamName} </b>
        <br/>
        Status <b>{this.props.status}</b>
        <br/>
       
    </div>
    );
  }
}