import React from 'react';
import ProductCard from '../Components/ProductCard.js';

class ProductContainer extends React.Component {

    state = {
        productApi: []
    }

    componentDidMount(){
        fetch("http://localhost:4000/products/")
        .then(response => response.json())
        .then(product => this.setState({productApi: product}))
        .catch(console.log)
    }

    newProductSubmitHandler = (newProduct) => {
        fetch("http://localhost:4000/products", {
            method: "POST", 
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(product => this.setState({productApi: [ product, ...this.state.productApi ]}))
        .catch(console.log)
    }

    updateProductSubmitHandler = (id, image, description, price) => {
        let updateProduct = { 
            image: image,
            description: description,
            price: price, 
        }
        fetch(`http://localhost:4000/products/${id}`, {
            method: "PATCH", 
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
        .then(response => response.json())
        .then(product => {
            let newArray = [...this.state.productApi]
            let foundObject = newArray.find(el => el.id === product.id)
             newArray[newArray.indexOf(foundObject)] = product
                this.setState({productApi: newArray})
        })
        .catch(console.log)
    }

    productDeleteHandler = (productId) => {
        fetch(`http://localhost:4000/products/${productId}`, {
             method: "DELETE"
        })
        .then(response => response.json())
        .then((response) => {
            let newArray = this.state.productApi.filter(product => product.id !== productId)
            this.setState({productApi: newArray})
        })
    }

    renderProducts = () => {
        return this.state.productApi.map((el) => <ProductCard key={el.id} product={el} updateHandler={this.updateProductSubmitHandler} deleteHandler={this.productDeleteHandler} />)
    }

    render(){
        return(
            <div>
                Product Container
                {this.renderProducts()}
            </div>
        )
    }
}

export default ProductContainer;