
import React, {Component} from 'react';
import UserList from '../components/UserList';

// import 'semantic-ui-css/semantic.min.css';

var usersDummy = [
    {
        name: 'Lena',
        points: 1,
        voteFor: "",
        isHost: true,
    },
    {
        name: 'Lindsay',
        points: 0,
        voteFor: "",
        isHost: false,
    },
    {
        name: 'Billy',
        points: 10,
        voteFor: "",
        isHost: true,
    },
]

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: usersDummy,
        }

    }


    render() {
        return(
            <div className='game'>
                <h1>Welcome to the game</h1>
                <UserList users={this.state.users}></UserList>

        
            </div>
        )
    }
}

export default Game;