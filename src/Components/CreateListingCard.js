import React from 'react';

class CreateListingCard extends React.Component {
    state = {
        image: "",
        description: "",
        price: "",
    }


    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.newProductSubmitHandler(this.state)
        this.setState({image: "", description: "", price: ""})
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.localSubmitHandler}>
                    <input name="image" type="text" placeholder="image" value={this.state.image} onChange={this.changeHandler} />
                    <input name="description" type="text" placeholder="description" value={this.state.description} onChange={this.changeHandler} />
                    <input name="price" type="text" placeholder="price" value={this.state.price} onChange={this.changeHandler} />
                    <button>Submit Listing</button>
                </form>
            </div>
        )
    }

}

export default CreateListingCard;
