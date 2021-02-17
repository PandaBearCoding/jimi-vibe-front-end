import React from 'react';
import UserCard from '../Components/UserCard.js';
import SignUpCard from '../Components/SignUpCard.js';


class UserContainer extends React.Component {

    state = {
        userApi: []
    }

    componentDidMount(){
        fetch("http://localhost:4000/users/")
        .then(response => response.json())
        .then(user => this.setState({userApi: user}))
        .catch(console.log)
    }

    newUserSubmitHandler = (newUser) => {
        fetch("http://localhost:4000/users", {
            method: "POST", 
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newUser)
          })
          .then(response => response.json())
          .then(user => this.setState({userApi: [ user, ...this.state.userApi ]}))
          .catch(console.log)
        }

    updateUserSubmitHandler = (id, username, password, name, profile_picture, email, phone_number, address, cc_number, cc_cvv, cc_date) => {
        let updateUser = { 
            username: username,
            password: password,
            name: name, 
            profile_picture: profile_picture, 
            email: email,
            phone_number: phone_number,
            address: address,
            cc_number: cc_number,
            cc_cvv: cc_cvv,
            cc_date: cc_date,
        }
        fetch(`http://localhost:4000/users/${id}`, {
            method: "PATCH", 
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(updateUser)
        })
        .then(response => response.json())
        .then(user => {
            let newArray = [...this.state.userApi]
            let foundObject = newArray.find(el => el.id === user.id)
             newArray[newArray.indexOf(foundObject)] = user
                this.setState({userApi: newArray})
        })
        .catch(console.log)
    }

    userDeleteHandler = (userId) => {
        fetch(`http://localhost:4000/users/${userId}`, {
             method: "DELETE"
        })
        .then(response => response.json())
        .then((response) => {
            let newArray = this.state.userApi.filter(user => user.id !== userId)
            this.setState({userApi: newArray})
        })
    }

    renderUsers = () => {
        return this.state.userApi.map((el) => <UserCard key={el.id} user={el} updateHandler={this.updateUserSubmitHandler} deleteHandler={this.userDeleteHandler} />)
    }

    render(){
        console.log("USER STATE", this.state.userApi)
        return(
            <div>
                User Container
                <SignUpCard newUserSubmitHandler={this.newUserSubmitHandler} />
                {this.renderUsers()}
            </div>
        )
    }
}

export default UserContainer;