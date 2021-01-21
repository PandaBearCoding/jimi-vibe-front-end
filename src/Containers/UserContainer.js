import React from 'react';
import UserCard from '../Components/UserCard.js';

class UserContainer extends React.Component {

    state = {
        userApi: []
    }

    renderUsers = () => {
        return this.state.userApi.map((el) => <UserCard key={el.id} user={el} />)
    }

    render(){
        return(
            <div>
                User Container
                {this.renderUsers()}
            </div>
        )
    }
}

export default UserContainer;