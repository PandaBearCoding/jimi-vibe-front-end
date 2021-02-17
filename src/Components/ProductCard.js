import React from 'react';

class ProductCard extends React.Component {

    state = {
        clicked: false,
        image: this.props.product.image,
        description: this.props.product.description, 
        price: this.props.product.price, 
    }

    updateClickHandler = (e) => {
        this.setState({clicked: true})
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localUpdateHandler = (e) => {
        console.log(this.props.product.id)
        e.preventDefault()
        this.props.updateHandler(this.state.id, this.state.image, this.state.description, this.state.price)
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
    }

    localDeleteHandler = (e) => {
        this.props.deleteHandler(this.props.product.id)
    }

    render(){
        console.log("PROPS", this.props.product)
        let { image, description, price } = this.props.product
        return(
            <div className="productCard">
                {this.state.clicked ? (
                <form onSubmit={this.localUpdateHandler}>
                    <input name="image" type= "text" value={this.state.image} onChange={this.changeHandler} />
                    <input name="description" type= "text" value={this.state.description} onChange={this.changeHandler} />
                    <input name="price" type="text" value={this.state.price} onChange={this.changeHandler} />
                    <button type="submit">Update Product</button>
                </form>
            ) :
            null
            }
                <img alt="" src={image}/>
                <p>Description: <span>{description}</span></p>
                <p> Price: <span>{price}</span></p>
                <button onClick={this.updateClickHandler}>Edit Product</button>
                <button onClick={this.localDeleteHandler}>Delete Product</button>
            </div>
        )
    }
}

export default ProductCard;



