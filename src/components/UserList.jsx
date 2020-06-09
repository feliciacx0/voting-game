// list of users

import React, { Component } from "react";
import { Button, Image, List } from "semantic-ui-react";
// import UserListRow from "../components/UserListRow";
import "./UserList.css";
import Cat from "../images/cat.jpg";
import VotePopup from "./VotePopup";

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showPopup: false,
        voteFor: "",
    };

    this.handlePopUp = this.handlePopUp.bind(this);
    this.handleSelectVote = this.handleSelectVote.bind(this);
    this.handleConfirmVote = this.handleConfirmVote.bind(this);
  }


  // initial vote button -> bring up popup 
  handleSelectVote = (voteForKey) => {
    //   console.log(voteForKey);
    //   console.log(this.props.users[voteForKey].name)
      this.setState({
          voteFor: this.props.users[voteForKey].name
      })
      this.handlePopUp();
  }

 

  // toggle popup
  handlePopUp = () => {
    // console.log(voteForKey);
    // console.log(this.props.users[voteForKey].name)
    this.setState({
        showPopup: !this.state.showPopup, 
    })

  };

  // confirm vote on popup 
  handleConfirmVote = () => {
      console.log(this.state.voteFor)

  }



  render() {
    return (
        <div>

        
      <div className="UserList">
        <List divided verticalAlign="middle">
          {Object.keys(this.props.users).map((keyName, i) => (
            <List.Item className={keyName}>
              <List.Content floated="right">
                <Button onClick={() => this.handleSelectVote(keyName)}>Vote</Button>
              </List.Content>
              <Image avatar src={Cat} />
              <List.Content> {this.props.users[keyName].name} </List.Content>
            </List.Item>
          ))}
        </List>

    
      </div>
      {this.state.showPopup ? <VotePopup closePopup={this.handlePopUp} voteFor={this.state.voteFor} handleSubmit={this.handleConfirmVote}> </VotePopup> : null}
      </div>
    );
  }
}

export default UserList;
