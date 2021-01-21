import React from 'react';
import ProductCard from '../Components/ProductCard.js';

class ProductContainer extends React.Component {
    
    state = {
        productApi: []
    }

    renderProducts = () => {
        return this.state.productApi.map((el) => <ProductCard key={el.id} product={el} />)
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