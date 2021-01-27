import React from 'react';

class UserCard extends React.Component {

    state = {
        clicked: false,
        username: this.props.user.username,
        password: this.props.user.password, 
        name: this.props.user.name, 
        profile_picture: this.props.user.profile_picture, 
        email: this.props.user.email,
        phone_number: this.props.user.phone_number,
        address: this.props.user.address,
        cc_number: this.props.user.cc_number,
        cc_cvv: this.props.user.cc_cvv,
        cc_date: this.props.user.cc_date,
    }

    updateClickHandler = (e) => {
        this.setState({clicked: true})
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localUpdateHandler = (e) => {
        e.preventDefault()
        this.props.updateHandler(this.props.user.id, this.state.username, this.state.password, this.state.name, this.state.profile_picture, this.state.email, this.state.phone_number, this.state.address, this.state.cc_number, this.state.cc_cvv, this.state.cc_date)
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
    }

    localDeleteHandler = (e) => {
        this.props.deleteHandler(this.props.user.id)
    }

    render(){
        let { username, password, name, profile_picture, email, phone_number, address, cc_number, cc_cvv, cc_date } = this.props.user
        return(
            <div className="userCard">
            {this.state.clicked ? (
                <form onSubmit={this.localUpdateHandler}>
                    <input name="username" type= "text" value={this.state.username} onChange={this.changeHandler} />
                    <input name="password" type= "text" value={this.state.password} onChange={this.changeHandler} />
                    <input name="name" type="text" value={this.state.name} onChange={this.changeHandler} />
                    <input name="email" type="text" value={this.state.email} onChange={this.changeHandler} />
                    <input name="profile_picture" type= "text" value={this.state.profile_picture} onChange={this.changeHandler} />
                    <input name="address" type= "text" value={this.state.address} onChange={this.changeHandler} />
                    <input name="cc_number" type= "text" value={this.state.cc_number} onChange={this.changeHandler} />
                    <input name="cc_cvv" type= "text" value={this.state.cc_cvv} onChange={this.changeHandler} />
                    <input name="cc_date" type= "text" value={this.state.cc_date} onChange={this.changeHandler} />
                    <button type="submit">Update Profile</button>
                </form>
            ) :
            null
            }
                <h1>{username}</h1>
                <h3>{name}</h3>
                <img alt="" src={profile_picture}/>
                <p>Phone Number: <span>{phone_number}</span></p>
                <p> Email: <span>{email}</span></p>
                <p>Address: <span>{address}</span></p>
                <p>Credit Card Number: <span>{cc_number}</span></p>
                <p>Credit Card Date: <span>{cc_date}</span></p>
                <p>Credit Card CVV: <span>{cc_cvv}</span></p>
                <button onClick={this.updateClickHandler}>Edit Profile</button>
                <button onClick={this.localDeleteHandler}>Delete Profile</button>
            </div>
        )
    }
}

export default UserCard;