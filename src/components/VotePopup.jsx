import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import '../components/VotePopup.css';

export default class VotePopup extends Component{


    render(){
        return(

            <div className="popup">
                <div className="popup_content">

                    <span className="close" onClick={this.props.closePopup}>&times;</span>


                    <h3>Confirm Vote for {this.props.voteFor}</h3>
                    <Button onClick={this.props.handleSubmit}>Confirm</Button>



                </div>
            </div>
        )
    }
}