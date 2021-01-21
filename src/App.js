import React from 'react';
import UserContainer from './Containers/UserContainer.js';
import ProductContainer from './Containers/ProductContainer.js';
import CartContainer from './Containers/CartContainer.js';

class App extends React.Component {
  render(){
    return(
      <div>
        <UserContainer />
        <ProductContainer />
        <CartContainer />
      </div>
    );
  }
}

export default App;
