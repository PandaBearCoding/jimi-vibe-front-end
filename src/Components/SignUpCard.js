import React from 'react';

class SignUpCard extends React.Component {
    state = {
        username: "",
        password: "",
        name: "",
        profile_picture: "",
        email: "",
        phone_number: "",
        address: "",
        cc_number: "",
        cc_date: "",
        cc_cvv: "", 
    }


    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.newUserSubmitHandler(this.state)
        this.setState({username: "", password: "", name: "", profile_picture: "", email: "", phone_number: "", address: "", cc_number: "", cc_date: "", cc_cvv: ""})
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div>
                <img alt="" src={"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/38635108_434429280387102_6961077985977827328_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=5M-8VLbqwecAX9Zilnn&_nc_ht=scontent-lga3-1.xx&oh=c0ff82be91a9b842ba58588e6c62ae92&oe=5FEA5BEE"}/>
                <form onSubmit={this.localSubmitHandler}>
                    <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.changeHandler} />
                    <input name="password" type="text" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
                    <input name="name" type="text" placeholder="name" value={this.state.name} onChange={this.changeHandler} />
                    <input name="profile_picture" type="text" placeholder="profile picture" value={this.state.profile_picture} onChange={this.changeHandler} />
                    <input name="email" type= "text" placeholder="email" value={this.state.postcode} onChange={this.changeHandler} />
                    <input name="address" type="text" placeholder="address" value={this.state.address} onChange={this.changeHandler} />
                    <input name="cc_number" type="text" placeholder="cc number" value={this.state.cc_number} onChange={this.changeHandler} />
                    <input name="cc_date" type="text" placeholder="cc expiration date" value={this.state.cc_date} onChange={this.changeHandler} />
                    <input name="cc_cvv" type="text" placeholder="cc CVV" value={this.state.cc_cvv} onChange={this.changeHandler} />
                    <button>Create Profile</button>
                </form>
            </div>
        )
    }

}

export default SignUpCard;
