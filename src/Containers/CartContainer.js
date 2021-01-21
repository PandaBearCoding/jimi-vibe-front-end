import React from 'react';
import CartCard from '../Components/CartCard.js';

class CartContainer extends React.Component {

    state = {
        cartApi: []
    }

    renderCarts = () => {
        return this.state.cartApi.map((el) => <CartCard key={el.id} cart={el} />)
    }
    render(){
        return(
            <div>
                Cart Container
                {this.renderCarts()}
            </div>
        )
    }
}

export default CartContainer;