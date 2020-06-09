
import React, {Component} from 'react';
import { Table, Button, Image, List } from 'semantic-ui-react';


// single row in UserList table 

class UserListRow extends Component{

    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            bgColor: 'white',
        };

        this.handleClick = this.handleClick.bind(this);
    };

    // change color & add to voteFor
    handleClick = () => {
        var color = this.state.clicked ? 'white' : 'green';
        this.setState({ bgColor: color, clicked: !this.state.clicked} )
    }



    render(){
        return(
            <Table.Row>
                    <Table.Cell selectable>
                        <a href="#"
                        onClick={() => this.handleClick()}
                        style={{backgroundColor: this.state.bgColor}}>
                            </a>
                        Person1 
                    </Table.Cell>
                </Table.Row>





        )
    }
}

export default UserListRow;